"use client";

import { useEffect, useMemo, useRef, useState, type MouseEvent } from "react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection, Geometry } from "geojson";
import type { Topology, GeometryCollection } from "topojson-specification";
import {
  citiesForMapCountry,
  mapNameToCityCountry,
  visitedCities,
  visitedCountryNames,
} from "@/data/cities";
import styles from "./TravelMap.module.css";

const visitedCityCountries = new Set(
  visitedCities.map((city) => city.country),
);

const VISITED_NAMES = new Set(
  Object.entries(mapNameToCityCountry)
    .filter(([, country]) => visitedCityCountries.has(country))
    .map(([mapName]) => mapName),
);

type CountryProps = { name: string };

function isVisited(name: string | undefined) {
  return Boolean(name && VISITED_NAMES.has(name));
}

export default function TravelMap() {
  const [collection, setCollection] = useState<FeatureCollection<
    Geometry,
    CountryProps
  > | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const [activeCity, setActiveCity] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number } | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  function moveTooltip(event: MouseEvent<Element>) {
    const rect = shellRef.current?.getBoundingClientRect();
    if (!rect) return;
    setTooltip({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  }

  function showCountry(name: string, event?: MouseEvent<Element>) {
    if (!isVisited(name) && name !== "Malta") return;
    setActive(name);
    if (event) moveTooltip(event);
  }

  useEffect(() => {
    let cancelled = false;

    fetch("/countries-110m.json")
      .then((res) => {
        if (!res.ok) throw new Error("Could not load map data");
        return res.json();
      })
      .then(
        (topology: Topology<{ countries: GeometryCollection<CountryProps> }>) => {
          if (cancelled) return;
          const countries = feature(topology, topology.objects.countries);
          setCollection(
            countries as FeatureCollection<Geometry, CountryProps>,
          );
        },
      )
      .catch(() => {
        if (!cancelled) setError("Map data failed to load.");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const { path, projection, width, height } = useMemo(() => {
    const width = 960;
    const height = 460;
    const projection = geoNaturalEarth1().fitSize(
      [width, height],
      collection ?? { type: "Sphere" },
    );
    return {
      path: geoPath(projection),
      projection,
      width,
      height,
    };
  }, [collection]);

  if (error) {
    return <p className={styles.status}>{error}</p>;
  }

  if (!collection) {
    return <p className={styles.status}>Loading map…</p>;
  }

  const orderedFeatures = [...collection.features].sort((a, b) => {
    const aVisited = isVisited(a.properties.name) ? 1 : 0;
    const bVisited = isVisited(b.properties.name) ? 1 : 0;
    return aVisited - bVisited;
  });

  const tooltipCountry = activeCity
    ? visitedCities.find(
        (city) => `${city.name}, ${city.country}` === activeCity,
      )?.country
    : active
      ? mapNameToCityCountry[active]
      : undefined;
  const tooltipCities = active
    ? citiesForMapCountry(active)
    : tooltipCountry
      ? visitedCities
          .filter((city) => city.country === tooltipCountry)
          .map((city) => city.name)
      : [];
  const tooltipTitle = active || tooltipCountry || "";

  return (
    <div ref={shellRef} className={`${styles.mapShell} map-shell`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="World map highlighting countries Chase has visited"
        className={styles.travelMap}
        onMouseLeave={() => {
          setActive(null);
          setActiveCity(null);
          setTooltip(null);
        }}
      >
        {orderedFeatures.map((f, index) => {
          const name = f.properties.name;
          const visited = isVisited(name);
          const d = path(f);
          if (!d) return null;

          return (
            <path
              key={`${index}-${name || "country"}`}
              d={d}
              className={
                visited ? `${styles.country} ${styles.visited}` : styles.country
              }
              onMouseEnter={(event) => showCountry(name, event)}
              onMouseMove={(event) => visited && moveTooltip(event)}
              onFocus={() => showCountry(name)}
              tabIndex={visited ? 0 : undefined}
            >
              <title>
                {visited
                  ? [name, ...citiesForMapCountry(name)].join(", ")
                  : name}
              </title>
            </path>
          );
        })}
        {visitedCities.map((city) => {
          const point = projection([city.lon, city.lat]);
          if (!point) return null;
          const [x, y] = point;
          const label = `${city.name}, ${city.country}`;
          const mapName =
            Object.entries(mapNameToCityCountry).find(
              ([, country]) => country === city.country,
            )?.[0] ?? city.country;

          return (
            <circle
              key={label}
              cx={x}
              cy={y}
              r={3.2}
              className={styles.cityDot}
              onMouseEnter={(event) => {
                setActiveCity(label);
                showCountry(mapName, event);
              }}
              onMouseMove={moveTooltip}
              onFocus={() => {
                setActiveCity(label);
                showCountry(mapName);
              }}
              tabIndex={0}
            >
              <title>{label}</title>
            </circle>
          );
        })}
      </svg>

      {tooltip && tooltipTitle && tooltipCities.length > 0 ? (
        <div
          className={styles.tooltip}
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <strong>{tooltipTitle}</strong>
          <ul>
            {tooltipCities.map((city) => (
              <li
                key={city}
                className={
                  activeCity?.startsWith(`${city},`) ? styles.tooltipActive : undefined
                }
              >
                {city}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className={styles.caption} aria-live="polite">
        {tooltipTitle && tooltipCities.length > 0 ? (
          <span>
            {tooltipTitle}: {tooltipCities.join(", ")}
          </span>
        ) : (
          <span>Hover or focus an orange country to see all the cities visited in each country.</span>
        )}
      </div>

      <ul className={styles.visitedList}>
        {visitedCountryNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
