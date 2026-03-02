import type { Meta, StoryObj } from "@storybook/react-vite";
import { FeatureCard } from "@/components/molecules/cards/FeatureCard";
import { ZapIcon } from "lucide-react";

const meta: Meta<typeof FeatureCard> = {
  title: "Molecules/Cards/FeatureCard",
  component: FeatureCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof FeatureCard>;

export const Default: Story = {
  render: () => (
    <FeatureCard
      title="Powerful Server Functions"
      description="Write server-side code that seamlessly integrates with your client components. Type-safe, secure, and simple."
      icon={<ZapIcon />}
      variant="default"
    />
  ),
};

export const Full: Story = {
  render: () => (
    <FeatureCard
      title="Powerful Server Functions"
      description="Write server-side code that seamlessly integrates with your client components. Type-safe, secure, and simple."
      icon={<ZapIcon />}
      variant="full"
    />
  ),
};
