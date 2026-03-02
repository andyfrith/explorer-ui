import type { Meta, StoryObj } from "@storybook/react-vite";
import { Header } from "@/components/organisms/Header";

const meta: Meta<typeof Header> = {
  title: "Organisms/Header",
  component: Header,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  render: () => <Header />,
};
