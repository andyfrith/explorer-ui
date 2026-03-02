import type { Meta, StoryObj } from "@storybook/react-vite";
import { Destinations } from "./Destinations";
import { destinations } from "@/data/destinations";

const meta: Meta<typeof Destinations> = {
  title: "Molecules/Destinations",
  component: Destinations,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Destinations>;

export const Default: Story = {
  render: () => <Destinations destinations={destinations} />,
};
