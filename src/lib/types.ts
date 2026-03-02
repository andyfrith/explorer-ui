export interface Destination {
  name: string;
  description: string;
  image: { src: string; alt: string; title: string };
  latitude: number;
  longitude: number;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface GeoPoint {
  latitude: number;
  longitude: number;
}

export interface Activity extends GeoPoint {
  id: number;
  name: string;
  image: string;
  description: string;
  shortDescription: string;
  price: number;
  city: string;
  state: string;
}

export interface Address {
  streetNumber?: string;
  streetName: string;
  city: string;
  state?: string;
  postalCode?: string;
  country: string;
}

export interface City extends GeoPoint {
  city: string;
  population: string;
  image: string;
  state: string;
}

export interface Location extends GeoPoint {
  id?: string; // Optional, if locations can be standalone entities
  name?: string; // Optional, a friendly name for the location
  address?: Address; // Optional, if only lat/lon are needed
  timezone?: string; // Optional, e.g., "America/New_York"
}
