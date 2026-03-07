import type { Meta, StoryObj } from "@storybook/react-vite";
import { Destinations } from "@/components/molecules/Destinations";
import { destinations } from "@/data/destinations";

const meta: Meta<typeof Destinations> = {
  title: "Molecules/Destinations",
  component: Destinations,
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
type Story = StoryObj<typeof Destinations>;

/** Default grid of destination cards. */
export const Grid: Story = {
  args: {
    destinations,
    display: "grid",
  },
};

/** Carousel with thumbnails navigation. */
export const Carousel: Story = {
  args: {
    destinations,
    display: "carousel",
  },
};

export const Compact: Story = {
  args: {
    destinations,
    variant: "compact",
    display: "grid",
  },
};

export const Aside: Story = {
  args: {
    destinations,
    variant: "aside",
    display: "grid",
  },
};
