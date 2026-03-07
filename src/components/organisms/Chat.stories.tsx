import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chat } from "./Chat";
import {
  pearlHarborMemorialMarkdown,
  SUGGESTED_ACTIONS,
  userRequestForPearlHarborMemorialInfo,
} from "@/data/oahu/pearlHarborMemorial";
import { UIMessage } from "@ai-sdk/react";

const mockAssistantMessage: UIMessage = {
  id: "msg-1",
  role: "assistant",
  parts: [{ type: "text", text: pearlHarborMemorialMarkdown }],
};

const mockUserMessage: UIMessage = {
  id: "msg-2",
  role: "user",
  parts: [{ type: "text", text: userRequestForPearlHarborMemorialInfo }],
};

const meta: Meta<typeof Chat> = {
  title: "Organisms/Chat",
  component: Chat,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Chat>;

export const Default: Story = {
  render: () => (
    <Chat
      variant="default"
      messages={[mockAssistantMessage, mockUserMessage]}
      suggestedActions={SUGGESTED_ACTIONS}
    />
  ),
};

export const Compact: Story = {
  render: () => (
    <Chat
      variant="compact"
      messages={[mockAssistantMessage, mockUserMessage]}
      suggestedActions={SUGGESTED_ACTIONS}
    />
  ),
};
