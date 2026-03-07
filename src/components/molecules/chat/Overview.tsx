import { motion } from "framer-motion";
import { BotIcon } from "@/components/ui/icons";
import { Text } from "@/components/atoms/Text";

const Overview = ({ children }: { children?: React.ReactNode }) => {
  return (
    <motion.div
      key="overview"
      className="mt-5"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="flex items-start gap-2 whitespace-pre-wrap">
        <div className="mt-6 shrink-0 text-(--text-green-color)">
          <BotIcon />
        </div>
        <div className="mb-4 flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-zinc-300 p-6 text-sm text-zinc-400 dark:border-zinc-700 dark:bg-[#333] dark:text-zinc-400">
          <div className="flex-1">
            <Text variant="p">
              I am an AI travel assistant here to guide you with my travel
              knowledge and expertise. I can help you with your travel plans,
              answer questions about destinations, and more.
            </Text>
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

Overview.displayName = "Overview";
export { Overview };
