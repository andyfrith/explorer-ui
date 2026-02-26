import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardExample } from "@/components/molecules/cards/CardExample";

const meta: Meta<typeof CardExample> = {
  title: "Molecules/Cards/CardExample",
  component: CardExample,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CardExample>;

export const Default: Story = {
  render: () => <CardExample />,
};
