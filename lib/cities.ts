// Default cities configuration (9 cities including China)
export interface CityData {
  name: string;
  timezone: string;
  countryCode: string;
  latitude?: number;
  longitude?: number;
}

export const defaultCities: CityData[] = [
  {
    name: 'Beijing',
    timezone: 'Asia/Shanghai',
    countryCode: 'CN',
    latitude: 39.9042,
    longitude: 116.4074,
  },
  {
    name: 'New York',
    timezone: 'America/New_York',
    countryCode: 'US',
    latitude: 40.7128,
    longitude: -74.0060,
  },
  {
    name: 'London',
    timezone: 'Europe/London',
    countryCode: 'GB',
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    name: 'Tokyo',
    timezone: 'Asia/Tokyo',
    countryCode: 'JP',
    latitude: 35.6762,
    longitude: 139.6503,
  },
  {
    name: 'Paris',
    timezone: 'Europe/Paris',
    countryCode: 'FR',
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    name: 'Sydney',
    timezone: 'Australia/Sydney',
    countryCode: 'AU',
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    name: 'Moscow',
    timezone: 'Europe/Moscow',
    countryCode: 'RU',
    latitude: 55.7558,
    longitude: 37.6173,
  },
  {
    name: 'Dubai',
    timezone: 'Asia/Dubai',
    countryCode: 'AE',
    latitude: 25.2048,
    longitude: 55.2708,
  },
  {
    name: 'Singapore',
    timezone: 'Asia/Singapore',
    countryCode: 'SG',
    latitude: 1.3521,
    longitude: 103.8198,
  },
];

// Extended city list for selection
export const availableCities: CityData[] = [
  ...defaultCities,
  { name: 'Shanghai', timezone: 'Asia/Shanghai', countryCode: 'CN', latitude: 31.2304, longitude: 121.4737 },
  { name: 'Hong Kong', timezone: 'Asia/Hong_Kong', countryCode: 'HK', latitude: 22.3193, longitude: 114.1694 },
  { name: 'Los Angeles', timezone: 'America/Los_Angeles', countryCode: 'US', latitude: 34.0522, longitude: -118.2437 },
  { name: 'Chicago', timezone: 'America/Chicago', countryCode: 'US', latitude: 41.8781, longitude: -87.6298 },
  { name: 'Toronto', timezone: 'America/Toronto', countryCode: 'CA', latitude: 43.6532, longitude: -79.3832 },
  { name: 'Berlin', timezone: 'Europe/Berlin', countryCode: 'DE', latitude: 52.5200, longitude: 13.4050 },
  { name: 'Rome', timezone: 'Europe/Rome', countryCode: 'IT', latitude: 41.9028, longitude: 12.4964 },
  { name: 'Madrid', timezone: 'Europe/Madrid', countryCode: 'ES', latitude: 40.4168, longitude: -3.7038 },
  { name: 'Mumbai', timezone: 'Asia/Kolkata', countryCode: 'IN', latitude: 19.0760, longitude: 72.8777 },
  { name: 'Seoul', timezone: 'Asia/Seoul', countryCode: 'KR', latitude: 37.5665, longitude: 126.9780 },
  { name: 'Bangkok', timezone: 'Asia/Bangkok', countryCode: 'TH', latitude: 13.7563, longitude: 100.5018 },
  { name: 'Istanbul', timezone: 'Europe/Istanbul', countryCode: 'TR', latitude: 41.0082, longitude: 28.9784 },
  { name: 'São Paulo', timezone: 'America/Sao_Paulo', countryCode: 'BR', latitude: -23.5505, longitude: -46.6333 },
  { name: 'Mexico City', timezone: 'America/Mexico_City', countryCode: 'MX', latitude: 19.4326, longitude: -99.1332 },
  { name: 'Cairo', timezone: 'Africa/Cairo', countryCode: 'EG', latitude: 30.0444, longitude: 31.2357 },
  { name: 'Johannesburg', timezone: 'Africa/Johannesburg', countryCode: 'ZA', latitude: -26.2041, longitude: 28.0473 },
];
