"use client";

import { useEffect, useMemo, useState } from "react";
import { geoNaturalEarth1, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection, Geometry } from "geojson";
import type { Topology, GeometryCollection } from "topojson-specification";
import styles from "./TravelMap.module.css";

const VISITED_IDS = new Set([
  "124",
  "840",
  "484",
  "188",
  "170",
  "068",
  "604",
  "152",
  "764",
  "392",
  "380",
  "300",
  "276",
  "040",
  "756",
  "056",
  "528",
  "036",
]);

const DETAIL: Record<string, string> = {
  Canada: "4 provinces",
  "United States of America": "8 states",
  Mexico: "4 provinces",
};

type CountryProps = { name: string };

function isVisited(id: string | number | undefined) {
  if (id === undefined) return false;
  const raw = String(id);
  return VISITED_IDS.has(raw) || VISITED_IDS.has(raw.padStart(3, "0"));
}

export default function TravelMap() {
  const [collection, setCollection] = useState<FeatureCollection<
    Geometry,
    CountryProps
  > | null>(null);
  const [active, setActive] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  const { path, width, height } = useMemo(() => {
    const width = 960;
    const height = 460;
    const projection = geoNaturalEarth1().fitSize(
      [width, height],
      collection ?? { type: "Sphere" },
    );
    return {
      path: geoPath(projection),
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

  const visitedNames = collection.features
    .filter((f) => isVisited(f.id))
    .map((f) => f.properties.name)
    .sort((a, b) => a.localeCompare(b));

  const listNames = [...visitedNames, "Malta"].sort((a, b) =>
    a.localeCompare(b),
  );

  return (
    <div className={`${styles.mapShell} map-shell`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="World map highlighting countries Chase has visited"
        className={styles.travelMap}
      >
        {collection.features.map((f) => {
          const name = f.properties.name;
          const visited = isVisited(f.id);
          const d = path(f);
          if (!d) return null;

          return (
            <path
              key={String(f.id)}
              d={d}
              className={
                visited ? `${styles.country} ${styles.visited}` : styles.country
              }
              onMouseEnter={() => visited && setActive(name)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => visited && setActive(name)}
              onBlur={() => setActive(null)}
              tabIndex={visited ? 0 : undefined}
            >
              <title>
                {visited
                  ? DETAIL[name]
                    ? `${name} (${DETAIL[name]})`
                    : name
                  : name}
              </title>
            </path>
          );
        })}
      </svg>

      <div className={styles.caption} aria-live="polite">
        {active ? (
          <span>
            {active}
            {DETAIL[active] ? ` · ${DETAIL[active]}` : ""}
          </span>
        ) : (
          <span>
            Hover a country in orange. Malta is on the list too, just too tiny
            to show up here.
          </span>
        )}
      </div>

      <ul className={styles.visitedList}>
        {listNames.map((name) => (
          <li key={name}>
            {name}
            {DETAIL[name] ? ` (${DETAIL[name]})` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}
