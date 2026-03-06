import type { Meta, StoryObj } from "@storybook/react-vite";
import { DestinationsLayout } from "@/components/templates/DestinationsLayout";
import { CITIES } from "@/data/oahu/cities";

const meta: Meta<typeof DestinationsLayout> = {
  title: "Templates/DestinationsLayout",
  component: DestinationsLayout,
  tags: ["autodocs"],
  argTypes: {
    display: {
      control: "radio",
      options: ["grid", "carousel"],
      description: "Destinations display: grid or carousel",
    },
  },
};

export default meta;
type Story = StoryObj<typeof DestinationsLayout>;

/** Full layout with destinations in a grid. */
export const Default: Story = {
  args: {
    latitude: 21.3935,
    longitude: -157.9564,
    zoom: 10,
    markers: CITIES,
    display: "grid",
  },
};

/** Full layout with destinations in a carousel. */
export const Carousel: Story = {
  args: {
    latitude: 21.3935,
    longitude: -157.9564,
    zoom: 10,
    markers: CITIES,
    display: "carousel",
  },
};
