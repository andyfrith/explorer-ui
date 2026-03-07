import type { Meta, StoryObj } from "@storybook/react-vite";
import { SuggestedActions } from "@/components/molecules/chat/SuggestedActions";
import { SUGGESTED_ACTIONS } from "@/data/oahu/pearlHarborMemorial";

const meta: Meta<typeof SuggestedActions> = {
  title: "Molecules/Chat/SuggestedActions",
  component: SuggestedActions,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof SuggestedActions>;

export const Default: Story = {
  render: () => (
    <SuggestedActions actions={SUGGESTED_ACTIONS} onSelect={() => {}} />
  ),
};

export const Compact: Story = {
  render: () => (
    <SuggestedActions
      actions={SUGGESTED_ACTIONS}
      onSelect={() => {}}
      variant="compact"
    />
  ),
};
