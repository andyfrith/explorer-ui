import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddressCard } from "@/components/molecules/cards/AddressCard";

const meta: Meta<typeof AddressCard> = {
  title: "Molecules/Cards/AddressCard",
  component: AddressCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AddressCard>;

export const Default: Story = {
  render: () => (
    <AddressCard
      title="Address"
      description="Pearl Harbor Visitor Center"
      address="123 Main St, Honolulu, HI 96815"
      variant="default"
    />
  ),
};
