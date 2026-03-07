import { type Media, MediaType } from "@/lib/types";

/** Item shape needed for carousel media (Destination and Attraction both conform). */
export interface CarouselMediaSource {
  name: string;
  description: string;
  media: Media[];
}

/**
 * Maps items with name/description/media to Media[] for SwiperCarousel.
 * @param items - Array of items implementing CarouselMediaSource (e.g. Destination or Attraction)
 * @returns Array of Media suitable for carousel display
 */
export function itemsToMedia<T extends CarouselMediaSource>(
  items: T[],
): Media[] {
  return items.map((item) => {
    const first = item.media[0];
    return {
      title: item.name,
      description: item.description,
      image: first?.image ?? "",
      thumbnailImage: first?.thumbnailImage ?? first?.image ?? "",
      type: MediaType.IMAGE,
      altText: first?.altText,
    };
  });
}
