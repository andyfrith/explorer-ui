import type { UIMessage as AIMessage } from "@ai-sdk/react";
import { cva } from "class-variance-authority";
import { UserIcon } from "@/components/ui/icons";
import { BotIcon } from "@/components/ui/icons";
import { Markdown } from "@/components/atoms/Markdown";

interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  message: AIMessage;
  variant?: "default" | "compact";
}

const messageVariants = cva(
  "transition-all duration-200 flex items-start gap-2 whitespace-pre-wrap",
  {
    variants: {
      variant: {
        default: "p-0",
        compact: "p-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Message({
  children,
  message,
  variant = "default",
  ...props
}: MessageProps) {
  return (
    <div className={messageVariants({ variant })} {...props}>
      {message.role === "user" ? (
        <div className="mt-6 shrink-0">
          <UserIcon />
        </div>
      ) : (
        <div className="mt-6 shrink-0">
          <BotIcon />
        </div>
      )}
      <div className="mb-4 flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-zinc-300 p-6 text-sm text-zinc-400 dark:border-zinc-700 dark:bg-[#333] dark:text-zinc-400">
        <div className="flex-1">
          {message.parts.map((part, i) => {
            switch (part.type) {
              case "text":
                return (
                  <div key={`${message.id}-${i}`}>
                    <Markdown>{part.text}</Markdown>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
    </div>
  );
}

Message.displayName = "Message";
export { Message, messageVariants };
