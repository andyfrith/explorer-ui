import type { Meta, StoryObj } from "@storybook/react-vite";
import { Map } from "@/components/molecules/maps/Map";
import activities from "@/data/activities";

const meta: Meta<typeof Map> = {
  title: "Molecules/Maps/Map",
  component: Map,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Map>;

export const Default: Story = {
  render: () => (
    <Map variant="default" latitude={20.77} longitude={-156.33} zoom={10} />
  ),
};

export const WithMarkers: Story = {
  render: () => (
    <Map
      variant="default"
      latitude={20.77}
      longitude={-156.33}
      zoom={10}
      markers={activities}
      onSelectMarker={(marker) => {
        console.log(marker);
      }}
    />
  ),
};
