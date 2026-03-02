import type { Meta, StoryObj } from "@storybook/react-vite";
import { DestinationsLayout } from "@/components/templates/DestinationsLayout";
import { CITIES } from "@/data/oahu/cities";

const meta: Meta<typeof DestinationsLayout> = {
  title: "Templates/DestinationsLayout",
  component: DestinationsLayout,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DestinationsLayout>;

export const Default: Story = {
  render: () => (
    <DestinationsLayout
      latitude={21.3935}
      longitude={-157.9564}
      zoom={10}
      markers={CITIES}
    />
  ),
};
