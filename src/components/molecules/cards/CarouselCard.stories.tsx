import type { Meta, StoryObj } from "@storybook/react-vite";
import { CarouselCard } from "@/components/molecules/cards/CarouselCard";
import { MediaType, type Media } from "@/lib/types";

const meta: Meta<typeof CarouselCard> = {
  title: "Molecules/Cards/CarouselCard",
  component: CarouselCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof CarouselCard>;

const defaultItems: Media[] = [
  {
    image: "/images/locations/HonoluluBeach.jpg",
    thumbnailImage: "/images/locations/HonoluluBeach.jpg",
    type: MediaType.IMAGE,
    title: "Honolulu Beach",
    description:
      "White sand beaches and clear waters on Oahu. A perfect spot for swimming, surfing, and sunset views.",
  },
  {
    image: "/images/locations/Alaska.jpeg",
    thumbnailImage: "/images/locations/Alaska.jpeg",
    type: MediaType.IMAGE,
    title: "Alaska",
    description:
      "Mountains, glaciers, and wildlife. Experience the raw beauty of America’s last frontier.",
  },
  {
    image: "/images/locations/Paris.webp",
    thumbnailImage: "/images/locations/Paris.webp",
    type: MediaType.IMAGE,
    title: "Paris",
    description:
      "The City of Light: art, cuisine, and iconic landmarks from the Eiffel Tower to the Louvre.",
  },
  {
    image: "/images/locations/qiddiya-performing-arts-centre.webp",
    thumbnailImage: "/images/locations/qiddiya-performing-arts-centre.webp",
    type: MediaType.IMAGE,
    title: "Qiddiya",
    description:
      "A new entertainment and culture destination with performing arts and theme parks.",
  },
  {
    image: "/images/locations/NewYork.webp",
    thumbnailImage: "/images/locations/NewYork.webp",
    type: MediaType.IMAGE,
    title: "New York",
    description:
      "Skyscrapers, Broadway, and diverse neighborhoods. The city that never sleeps.",
  },
];

export const Default: Story = {
  args: {
    name: "Featured destination",
    description:
      "Explore multiple views of this location. The card uses a SwiperCarousel in place of a single image.",
    items: defaultItems,
    variant: "default",
  },
};

export const ThumbnailsNav: Story = {
  args: {
    name: "Featured destination",
    description:
      "Same card with thumbnail navigation below the main carousel image.",
    items: defaultItems,
    variant: "thumbnailsNav",
  },
};
