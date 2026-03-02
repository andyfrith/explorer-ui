import type { Meta, StoryObj } from "@storybook/react-vite";
import { Features } from "./Features";
import features from "@/data/features";

const meta: Meta<typeof Features> = {
  title: "Molecules/Features",
  component: Features,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Features>;

export const Default: Story = {
  render: () => <Features features={features} />,
};
