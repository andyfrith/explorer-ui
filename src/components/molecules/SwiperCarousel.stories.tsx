import type { Meta, StoryObj } from "@storybook/react-vite";
import { SwiperCarousel } from "@/components/molecules/SwiperCarousel";
import { itemsToMedia } from "@/lib/carousel";
import { destinations } from "@/data/destinations";

/** Map destinations to Media format for the carousel. */
const defaultItems = itemsToMedia(destinations);

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
