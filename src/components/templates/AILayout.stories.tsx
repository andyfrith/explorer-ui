import type { Meta, StoryObj } from "@storybook/react-vite";
import { AILayout } from "@/components/templates/AILayout";

const meta: Meta<typeof AILayout> = {
  title: "Templates/AILayout",
  component: AILayout,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AILayout>;

export const Default: Story = {
  render: () => <AILayout />,
};
