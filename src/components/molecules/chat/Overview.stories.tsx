import type { Meta, StoryObj } from "@storybook/react-vite";
import { Overview } from "@/components/molecules/chat/Overview";

const meta: Meta<typeof Overview> = {
  title: "Molecules/Chat/Overview",
  component: Overview,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Overview>;

export const Default: Story = {
  render: () => <Overview />,
};
