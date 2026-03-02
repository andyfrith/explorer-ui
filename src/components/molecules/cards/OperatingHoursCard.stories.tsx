import type { Meta, StoryObj } from "@storybook/react-vite";
import { OperatingHoursCard } from "@/components/molecules/cards/OperatingHoursCard";

const meta: Meta<typeof OperatingHoursCard> = {
  title: "Molecules/Cards/OperatingHoursCard",
  component: OperatingHoursCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof OperatingHoursCard>;

export const Default: Story = {
  render: () => (
    <OperatingHoursCard
      title="Operating Hours"
      description="Open daily"
      hours={[
        "Monday: 7:00 AM - 5:00 PM",
        "Tuesday: 7:00 AM - 5:00 PM",
        "Wednesday: 7:00 AM - 5:00 PM",
        "Thursday: 7:00 AM - 5:00 PM",
        "Friday: 7:00 AM - 5:00 PM",
        "Saturday: 7:00 AM - 5:00 PM",
        "Sunday: 7:00 AM - 5:00 PM",
      ]}
      variant="default"
    />
  ),
};

export const Compact: Story = {
  render: () => (
    <OperatingHoursCard
      title="Operating Hours"
      description="Open daily"
      hours={[
        "MON: 7:00 AM - 5:00 PM",
        "TUE: 7:00 AM - 5:00 PM",
        "WED: 7:00 AM - 5:00 PM",
        "THU: 7:00 AM - 5:00 PM",
        "FRI: 7:00 AM - 5:00 PM",
        "SAT: 7:00 AM - 5:00 PM",
        "SUN: 7:00 AM - 5:00 PM",
      ]}
      variant="compact"
    />
  ),
};
