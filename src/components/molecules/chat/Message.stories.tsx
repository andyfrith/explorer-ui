import type { Meta, StoryObj } from "@storybook/react-vite";
import { Message } from "@/components/molecules/chat/Message";
import type { UIMessage } from "@ai-sdk/react";
import {
  pearlHarborMemorialMarkdown,
  userRequestForPearlHarborMemorialInfo,
} from "@/data/oahu/pearlHarborMemorial";

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

const meta: Meta<typeof Message> = {
  title: "Molecules/Chat/Message",
  component: Message,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Message>;

export const Default: Story = {
  render: () => <Message variant="default" message={mockAssistantMessage} />,
};

export const Compact: Story = {
  render: () => <Message variant="compact" message={mockAssistantMessage} />,
};

export const UserRequest: Story = {
  render: () => <Message variant="default" message={mockUserMessage} />,
};
