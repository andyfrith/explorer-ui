import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/atoms/card";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon: React.ReactNode;
  variant: "default" | "compact" | "full";
}
const featureCardVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "max-w-sm",
      compact: "max-w-[220px] gap-2 p-2",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
function FeatureCard({
  title,
  description,
  icon,
  variant = "default",
  ...props
}: FeatureCardProps) {
  return (
    <Card
      {...props}
      className={cn(
        featureCardVariants({ variant }),
        "dark:bg-slate-800/50 dark:backdrop-blur-sm border rounded-2xl dark:border-slate-700 p-6 dark:hover:border-cyan-500/50 hover:border-gray-900/50 transition-all duration-300 dark:hover:shadow-lg dark:hover:shadow-cyan-500/10",
      )}
      style={{
        borderRadius: "1rem",
      }}
    >
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-xl font-semibold dark:text-white mb-3">
          {title}
        </CardTitle>
        <CardDescription className="text-gray-400 leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

FeatureCard.displayName = "FeatureCard";
export { FeatureCard, featureCardVariants };
