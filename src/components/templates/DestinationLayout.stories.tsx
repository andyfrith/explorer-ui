import type { Meta, StoryObj } from "@storybook/react-vite";
import { DestinationLayout } from "@/components/templates/DestinationLayout";
import { CITIES } from "@/data/oahu/cities";

const meta: Meta<typeof DestinationLayout> = {
  title: "Templates/DestinationLayout",
  component: DestinationLayout,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DestinationLayout>;

export const Default: Story = {
  render: () => (
    <DestinationLayout
      latitude={21.3935}
      longitude={-157.9564}
      zoom={10}
      markers={CITIES}
    />
  ),
};
