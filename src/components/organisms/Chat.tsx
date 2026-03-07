import { useEffect, useRef, useState } from "react";
import { cva } from "class-variance-authority";
import { SuggestedActions } from "../molecules/chat/SuggestedActions";
import { Overview } from "../molecules/chat/Overview";
import { UIMessage } from "@ai-sdk/react";
import { Message } from "@/components/molecules/chat/Message";
import type { SuggestedAction } from "@/components/molecules/chat/SuggestedActions";
import { motion } from "framer-motion";

interface ChatProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  suggestedActions?: SuggestedAction[];
  messages?: UIMessage[];
  variant?: "default" | "compact";
}

const chatVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "p-0",
      compact: "p-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Chat({
  children,
  suggestedActions,
  messages,
  variant = "default",
  ...props
}: ChatProps) {
  const [input, setInput] = useState("");
  // const { messages, sendMessage } = useState();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    // scrollToBottom();
    // Debug: log messages to see what's being received
    // console.log("Messages updated:", JSON.stringify(messages, null, 2));
  }, [messages]);
  return (
    <div className={chatVariants({ variant })} {...props}>
      <div
        ref={messagesContainerRef}
        className="space-y-4 px-4 py-4"

        // className="max-h-[60vh] space-y-4 overflow-y-auto px-4 py-4"
      >
        <Overview>
          {suggestedActions && (
            <SuggestedActions
              actions={suggestedActions}
              onSelect={() => {}}
              selectedPrompt={"input"}
            />
          )}
        </Overview>
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form
        className="mb-4"
        onSubmit={(e) => {
          e.preventDefault();
          // sendMessage({ text: input });
          setInput("");
        }}
      >
        <motion.div
          key="overview"
          className="mx-4 mt-5 max-w-[500px] md:mx-0"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ delay: 0.5 }}
        >
          <textarea
            className="mb-4 flex w-full flex-col gap-4 rounded-2xl border border-white bg-zinc-200 p-6 text-sm text-zinc-400 placeholder-zinc-400 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-white"
            value={input}
            placeholder="I have a specific question or request."
            rows={3}
            onChange={(e) => setInput(e.currentTarget.value)}
          />
        </motion.div>
      </form>
    </div>
  );
}

Chat.displayName = "Chat";
export { Chat, chatVariants };
