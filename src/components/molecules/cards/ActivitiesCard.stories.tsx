import type { Meta, StoryObj } from "@storybook/react-vite";
import { ActivitiesCard } from "@/components/molecules/cards/ActivitiesCard";

const meta: Meta<typeof ActivitiesCard> = {
  title: "Molecules/Cards/ActivitiesCard",
  component: ActivitiesCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ActivitiesCard>;

export const Default: Story = {
  render: () => (
    <ActivitiesCard
      title="Activities"
      description="USS Arizona Memorial Program"
      activities={[
        "Boat shuttle to the USS Arizona Memorial and visitor center exhibits.",
        "Duration: 75 minutes",
        "Price: Contact for price information",
      ]}
      variant="default"
    />
  ),
};

export const Compact: Story = {
  render: () => (
    <ActivitiesCard
      title="Activities"
      description="USS Arizona Memorial Program"
      activities={[
        "Boat shuttle to the USS Arizona Memorial and visitor center exhibits.",
        "Duration: 75 minutes",
        "Price: Contact for price information",
      ]}
      variant="compact"
    />
  ),
};
