import type { Meta, StoryObj } from "@storybook/react-vite";
import { MetricCard } from "@/components/molecules/cards/MetricCard";

const meta: Meta<typeof MetricCard> = {
  title: "Molecules/Cards/MetricCard",
  component: MetricCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MetricCard>;

export const Default: Story = {
  render: () => (
    <MetricCard
      title="Total Revenue"
      description="Last 30 days"
      value={45231.89}
      change={{ value: 20.1, period: "from last month", trend: "up" }}
      variant="default"
      status="success"
    />
  ),
};
