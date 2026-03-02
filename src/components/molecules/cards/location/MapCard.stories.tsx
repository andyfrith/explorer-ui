import type { Meta, StoryObj } from "@storybook/react-vite";
import { MapCard } from "./MapCard";

const meta: Meta<typeof MapCard> = {
  title: "Molecules/Cards/Location/MapCard",
  component: MapCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MapCard>;

export const Default: Story = {
  render: () => (
    <MapCard
      title="Honolulu, Hawaii, United States"
      description="Located on the island of Oahu"
      latitude={21.3069}
      longitude={-157.8583}
      variant="default"
    />
  ),
};

export const Compact: Story = {
  render: () => (
    <MapCard
      title="Honolulu, Hawaii, United States"
      description="Located on the island of Oahu"
      latitude={21.3069}
      longitude={-157.8583}
      variant="compact"
    />
  ),
};

export const Large: Story = {
  render: () => (
    <MapCard
      title="Honolulu, Hawaii, United States"
      description="Located on the island of Oahu"
      latitude={21.3069}
      longitude={-157.8583}
      variant="large"
    />
  ),
};

export const Full: Story = {
  render: () => (
    <MapCard
      title="Honolulu, Hawaii, United States"
      description="Located on the island of Oahu"
      latitude={21.3069}
      longitude={-157.8583}
      variant="full"
    />
  ),
};
