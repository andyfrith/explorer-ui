import type { Meta, StoryObj } from "@storybook/react-vite";
import { SwiperCarousel } from "@/components/molecules/SwiperCarousel";
import { destinations } from "@/data/destinations";
import { MediaType, type Media } from "@/lib/types";

/** Map destinations to Media format for the carousel. */
const defaultItems: Media[] = destinations.map((d) => {
  const first = d.media[0];
  return {
    title: d.name,
    description: d.description,
    image: first?.image ?? "",
    thumbnailImage: first?.thumbnailImage ?? first?.image ?? "",
    type: MediaType.IMAGE,
    altText: first?.altText,
  };
});

const meta: Meta<typeof SwiperCarousel> = {
  title: "Molecules/SwiperCarousel",
  component: SwiperCarousel,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SwiperCarousel>;

export const Default: Story = {
  args: {
    items: defaultItems,
    variant: "default",
    showItemCaption: true,
  },
};

export const NoCaption: Story = {
  args: {
    items: defaultItems,
    variant: "default",
    showItemCaption: false,
  },
};

export const ThumbnailsNav: Story = {
  args: {
    items: defaultItems,
    variant: "thumbnailsNav",
    showItemCaption: true,
  },
};
