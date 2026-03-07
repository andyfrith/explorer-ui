import type { Meta, StoryObj } from "@storybook/react-vite";

import { UIMessage } from "@ai-sdk/react";
import { AILayout } from "@/components/templates/AILayout";
import { Chat } from "@/components/organisms/Chat";
import {
  pearlHarborMemorialMarkdown,
  SUGGESTED_ACTIONS,
  userRequestForPearlHarborMemorialInfo,
} from "@/data/oahu/pearlHarborMemorial";
import { destinations } from "@/data/destinations";
import { Destinations } from "@/components/molecules/Destinations";

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

const meta: Meta<typeof AILayout> = {
  title: "Templates/AILayout",
  component: AILayout,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AILayout>;

export const Default: Story = {
  render: () => <AILayout left={<div>Left</div>} right={<div>Right</div>} />,
};

export const ChatLeft: Story = {
  render: () => (
    <AILayout
      left={
        <Chat
          variant="default"
          messages={[mockAssistantMessage, mockUserMessage]}
          suggestedActions={SUGGESTED_ACTIONS}
        />
      }
      right={<div className="bg-pink-500 w-full h-full" />}
    />
  ),
};

// export const ChatLeftDestinationRight: Story = {
//   render: () => (
//     <AILayout
//       left={
//         <Chat
//           variant="default"
//           messages={[mockAssistantMessage, mockUserMessage]}
//           suggestedActions={SUGGESTED_ACTIONS}
//         />
//       }
//       right={<Destination >}
//     />
//   ),
// };

export const ChatRight: Story = {
  render: () => (
    <AILayout
      left={<Destinations destinations={destinations} display="carousel" />}
      right={
        <Chat
          variant="default"
          messages={[mockAssistantMessage, mockUserMessage]}
          suggestedActions={SUGGESTED_ACTIONS}
        />
      }
    />
  ),
};
