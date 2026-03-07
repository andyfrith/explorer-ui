import type { Meta, StoryObj } from "@storybook/react-vite";
import { Attractions } from "@/components/molecules/Attractions";
import { oahuAttractions } from "@/data/oahu/attractions";

const meta: Meta<typeof Attractions> = {
  title: "Molecules/Attractions",
  component: Attractions,
  tags: ["autodocs"],
  argTypes: {
    display: {
      control: "radio",
      options: ["grid", "carousel"],
      description: "Layout: grid of cards or carousel",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Attractions>;

/** Default grid of attraction cards. */
export const Grid: Story = {
  args: {
    attractions: oahuAttractions,
    display: "grid",
  },
};

/** Carousel with thumbnails navigation. */
export const Carousel: Story = {
  args: {
    attractions: oahuAttractions,
    display: "carousel",
  },
};

export const Compact: Story = {
  args: {
    attractions: oahuAttractions,
    variant: "compact",
    display: "grid",
  },
};

export const Aside: Story = {
  args: {
    attractions: oahuAttractions,
    variant: "aside",
    display: "grid",
  },
};
