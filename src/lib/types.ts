export enum MediaType {
  IMAGE = "image",
  VIDEO = "video",
  AUDIO = "audio",
}

export interface Media {
  title?: string;
  description?: string;
  image: string;
  thumbnailImage: string;
  url?: string;
  type: MediaType;
  altText?: string;
  width?: number;
  height?: number;
  size?: number;
  duration?: number;
  format?: string;
}

export interface Attraction extends GeoPoint {
  id: string;
  name: string;
  description: string;
  media: Media[];
}

export interface Destination extends GeoPoint {
  name: string;
  description: string;
  media: Media[];
  attractions: Attraction[];
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
