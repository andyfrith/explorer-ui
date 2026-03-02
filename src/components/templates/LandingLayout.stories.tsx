import type { Meta, StoryObj } from "@storybook/react-vite";
import { LandingLayout } from "@/components/templates/LandingLayout";
import { CITIES } from "@/data/oahu/cities";

const meta: Meta<typeof LandingLayout> = {
  title: "Templates/LandingLayout",
  component: LandingLayout,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof LandingLayout>;

export const Default: Story = {
  render: () => (
    <LandingLayout
      latitude={21.3935}
      longitude={-157.9564}
      zoom={10}
      markers={CITIES}
    />
  ),
};
