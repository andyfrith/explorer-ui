import type { Meta, StoryObj } from "@storybook/react-vite";
import { ForecastMap } from "@/components/organisms/ForecastMap";
import { CITIES } from "@/data/oahu/cities";

const meta: Meta<typeof ForecastMap> = {
  title: "Organisms/ForecastMap",
  component: ForecastMap,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Map>;

export const Default: Story = {
  render: () => (
    <ForecastMap
      variant="default"
      latitude={21.3935}
      longitude={-157.9564}
      zoom={10}
    />
  ),
};

export const WithMarkers: Story = {
  render: () => (
    <ForecastMap
      variant="default"
      latitude={21.3935}
      longitude={-157.9564}
      zoom={10}
      markers={CITIES}
    />
  ),
};
