import { cva } from "class-variance-authority";
import { Feature } from "@/lib/types";
import { FeatureCard } from "./cards/FeatureCard";

interface FeaturesProps extends React.HTMLAttributes<HTMLDivElement> {
  features: Feature[];
  children?: React.ReactNode;
}

const featuresVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "p-2",
      compact: "p-2",
      detailed: "p-2 space-y-4",
    },
    status: {
      success:
        "border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/50",
      warning:
        "border-yellow-200 bg-yellow-50/50 dark:border-yellow-800 dark:bg-yellow-950/50",
      error:
        "border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/50",
      info: "border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/50",
      neutral: "",
    },
  },
  defaultVariants: {
    variant: "default",
    status: "neutral",
  },
});

function Features({ children, features, ...props }: FeaturesProps) {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature: Feature, index: number) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            variant="default"
          />
        ))}
      </div>
    </section>
  );
}

Features.displayName = "Features";
export { Features, featuresVariants };
