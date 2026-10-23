export type VisitedCity = {
  name: string;
  country: string;
  lon: number;
  lat: number;
};

export const visitedCities: VisitedCity[] = [
  { name: "Vancouver", country: "Canada", lon: -123.1207, lat: 49.2827 },
  { name: "Victoria", country: "Canada", lon: -123.3656, lat: 48.4284 },
  { name: "Tofino", country: "Canada", lon: -125.9066, lat: 49.153 },
  { name: "Whistler", country: "Canada", lon: -122.9574, lat: 50.1163 },
  { name: "Jasper", country: "Canada", lon: -118.0814, lat: 52.8737 },
  { name: "Banff", country: "Canada", lon: -115.5708, lat: 51.1784 },
  { name: "Kelowna", country: "Canada", lon: -119.496, lat: 49.888 },
  { name: "Osoyoos", country: "Canada", lon: -119.4661, lat: 49.0323 },
  { name: "Merritt", country: "Canada", lon: -120.7862, lat: 50.1113 },
  { name: "Salmon Arm", country: "Canada", lon: -119.272, lat: 50.7001 },
  { name: "Revelstoke", country: "Canada", lon: -118.1957, lat: 50.9981 },
  { name: "Calgary", country: "Canada", lon: -114.0719, lat: 51.0447 },
  { name: "Toronto", country: "Canada", lon: -79.3832, lat: 43.6532 },
  { name: "Montreal", country: "Canada", lon: -73.5673, lat: 45.5017 },
  { name: "Quebec City", country: "Canada", lon: -71.208, lat: 46.8139 },

  { name: "New York", country: "USA", lon: -74.006, lat: 40.7128 },
  { name: "Miami", country: "USA", lon: -80.1918, lat: 25.7617 },
  { name: "Salt Lake City", country: "USA", lon: -111.891, lat: 40.7608 },
  { name: "Austin", country: "USA", lon: -97.7431, lat: 30.2672 },
  { name: "Phoenix", country: "USA", lon: -112.074, lat: 33.4484 },
  { name: "Las Vegas", country: "USA", lon: -115.1398, lat: 36.1699 },
  { name: "San Diego", country: "USA", lon: -117.1611, lat: 32.7157 },
  { name: "Carlsbad", country: "USA", lon: -117.3506, lat: 33.1581 },
  { name: "Los Angeles", country: "USA", lon: -118.2437, lat: 34.0522 },
  { name: "Portland", country: "USA", lon: -122.6784, lat: 45.5152 },
  { name: "Seattle", country: "USA", lon: -122.3321, lat: 47.6062 },
  { name: "Denver", country: "USA", lon: -104.9903, lat: 39.7392 },

  { name: "Cabo San Lucas", country: "Mexico", lon: -109.9167, lat: 22.8905 },
  { name: "Mazatlan", country: "Mexico", lon: -106.4111, lat: 23.2494 },
  { name: "Puerto Vallarta", country: "Mexico", lon: -105.2253, lat: 20.6534 },
  { name: "Puerto Escondido", country: "Mexico", lon: -97.0767, lat: 15.872 },
  { name: "Huatulco", country: "Mexico", lon: -96.1342, lat: 15.7675 },
  { name: "Cancun", country: "Mexico", lon: -86.8515, lat: 21.1619 },
  { name: "Playa del Carmen", country: "Mexico", lon: -87.0739, lat: 20.6296 },
  { name: "Tulum", country: "Mexico", lon: -87.4654, lat: 20.211 },

  { name: "San Jose", country: "Costa Rica", lon: -84.0907, lat: 9.9281 },
  { name: "Jaco", country: "Costa Rica", lon: -84.63, lat: 9.6148 },
  { name: "La Fortuna", country: "Costa Rica", lon: -84.6453, lat: 10.4717 },
  { name: "Santa Teresa", country: "Costa Rica", lon: -85.1674, lat: 9.6403 },
  { name: "Montezuma", country: "Costa Rica", lon: -85.0681, lat: 9.6544 },

  { name: "Medellin", country: "Colombia", lon: -75.5658, lat: 6.2476 },
  { name: "Cartagena", country: "Colombia", lon: -75.4794, lat: 10.391 },
  { name: "Santa Marta", country: "Colombia", lon: -74.211, lat: 11.2404 },

  { name: "Cusco", country: "Peru", lon: -71.9675, lat: -13.5319 },
  { name: "Arequipa", country: "Peru", lon: -71.5375, lat: -16.409 },
  { name: "Machu Picchu", country: "Peru", lon: -72.545, lat: -13.1631 },
  { name: "Aguas Calientes", country: "Peru", lon: -72.5254, lat: -13.1547 },

  { name: "La Paz", country: "Bolivia", lon: -68.15, lat: -16.5 },
  { name: "Isla del Sol", country: "Bolivia", lon: -69.1714, lat: -16.0206 },
  { name: "Copacabana", country: "Bolivia", lon: -69.0833, lat: -16.1667 },

  { name: "Calama", country: "Chile", lon: -68.9294, lat: -22.4544 },
  { name: "Santiago", country: "Chile", lon: -70.6693, lat: -33.4489 },
  { name: "Vina del Mar", country: "Chile", lon: -71.55, lat: -33.0153 },
  { name: "La Serena", country: "Chile", lon: -71.2519, lat: -29.9027 },
  { name: "Maitencillo", country: "Chile", lon: -71.4333, lat: -32.65 },
  { name: "Valparaiso", country: "Chile", lon: -71.6127, lat: -33.0472 },
  { name: "Cajon del Maipo", country: "Chile", lon: -70.35, lat: -33.6167 },
  { name: "Punta Arenas", country: "Chile", lon: -70.9171, lat: -53.1638 },
  { name: "Puerto Natales", country: "Chile", lon: -72.5064, lat: -51.7236 },

  { name: "Amsterdam", country: "Netherlands", lon: 4.9041, lat: 52.3676 },
  { name: "Utrecht", country: "Netherlands", lon: 5.1214, lat: 52.0907 },
  { name: "Rotterdam", country: "Netherlands", lon: 4.4777, lat: 51.9244 },
  { name: "Eindhoven", country: "Netherlands", lon: 5.4697, lat: 51.4416 },
  { name: "Maastricht", country: "Netherlands", lon: 5.69, lat: 50.8514 },

  { name: "Brussels", country: "Belgium", lon: 4.3517, lat: 50.8503 },

  { name: "Mannheim", country: "Germany", lon: 8.466, lat: 49.4875 },
  { name: "Frankfurt", country: "Germany", lon: 8.6821, lat: 50.1109 },
  { name: "Stuttgart", country: "Germany", lon: 9.1829, lat: 48.7758 },
  { name: "Konstanz", country: "Germany", lon: 9.1753, lat: 47.6633 },
  { name: "Cologne", country: "Germany", lon: 6.9603, lat: 50.9375 },

  { name: "Innsbruck", country: "Austria", lon: 11.4041, lat: 47.2692 },

  { name: "St. Gallen", country: "Switzerland", lon: 9.3767, lat: 47.4245 },

  { name: "Rome", country: "Italy", lon: 12.4964, lat: 41.9028 },
  { name: "Florence", country: "Italy", lon: 11.2558, lat: 43.7696 },
  { name: "Pisa", country: "Italy", lon: 10.4017, lat: 43.7228 },
  { name: "Naples", country: "Italy", lon: 14.2681, lat: 40.8518 },

  { name: "Santorini", country: "Greece", lon: 25.4615, lat: 36.3932 },
  { name: "Athens", country: "Greece", lon: 23.7275, lat: 37.9838 },
  { name: "Mykonos", country: "Greece", lon: 25.3289, lat: 37.4467 },
  { name: "Crete", country: "Greece", lon: 25.1442, lat: 35.3387 },

  { name: "Valletta", country: "Malta", lon: 14.5146, lat: 35.8989 },

  { name: "Bangkok", country: "Thailand", lon: 100.5018, lat: 13.7563 },

  { name: "Tokyo", country: "Japan", lon: 139.6503, lat: 35.6762 },
  { name: "Osaka", country: "Japan", lon: 135.5023, lat: 34.6937 },
  { name: "Kyoto", country: "Japan", lon: 135.7681, lat: 35.0116 },
  { name: "Matsuyama", country: "Japan", lon: 132.7657, lat: 33.8392 },
  { name: "Nago", country: "Japan", lon: 127.9775, lat: 26.5916 },

  { name: "Sydney", country: "Australia", lon: 151.2093, lat: -33.8688 },
  { name: "Orange", country: "Australia", lon: 149.1003, lat: -33.2839 },
  { name: "Melbourne", country: "Australia", lon: 144.9631, lat: -37.8136 },
];

export const mapNameToCityCountry: Record<string, string> = {
  Canada: "Canada",
  "United States of America": "USA",
  Mexico: "Mexico",
  "Costa Rica": "Costa Rica",
  Colombia: "Colombia",
  Peru: "Peru",
  Bolivia: "Bolivia",
  Chile: "Chile",
  Netherlands: "Netherlands",
  Belgium: "Belgium",
  Germany: "Germany",
  Austria: "Austria",
  Switzerland: "Switzerland",
  Italy: "Italy",
  Greece: "Greece",
  Malta: "Malta",
  Thailand: "Thailand",
  Japan: "Japan",
  Australia: "Australia",
};

export function citiesForMapCountry(mapName: string) {
  const country = mapNameToCityCountry[mapName];
  if (!country) return [];
  return visitedCities
    .filter((city) => city.country === country)
    .map((city) => city.name);
}

export const visitedCountryNames = [
  ...new Set(visitedCities.map((city) => city.country)),
];

export const visitedCountryCount = visitedCountryNames.length;

export const travelSummary = visitedCountryNames
  .join(", ")
  .replace(/, ([^,]+)$/, ", and $1");
