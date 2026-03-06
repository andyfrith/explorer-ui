import type { Attraction } from "@/lib/types";
import { MediaType } from "@/lib/types";
import rawAttractions from "./attractions.json";

/**
 * Typed Oahu attractions. Maps JSON media type string to MediaType enum.
 */
export const oahuAttractions: Attraction[] = rawAttractions.map((a) => ({
  id: a.id,
  name: a.name,
  description: a.description,
  latitude: a.latitude,
  longitude: a.longitude,
  media: a.media.map((m) => ({
    ...m,
    type: MediaType.IMAGE,
  })),
}));
