import type { Meta, StoryObj } from "@storybook/react-vite";
import { CitySelectorCard } from "@/components/molecules/cards/location/CitySelectorCard";

const meta: Meta<typeof CitySelectorCard> = {
  title: "Molecules/Cards/Location/CitySelectorCard",
  component: CitySelectorCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CitySelectorCard>;

export const Default: Story = {
  render: () => <CitySelectorCard />,
};
