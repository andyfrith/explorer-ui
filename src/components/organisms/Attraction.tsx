import { cva } from "class-variance-authority";
import { AttractionCard } from "@/components/molecules/cards/location/AttractionCard";

interface AttractionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icons?: Array<React.ReactNode>;
  image?: { src: string; alt: string; title: string };
  variant: "default" | "compact" | "large" | "full";
  children?: React.ReactNode;
}

const attractionVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "p-6",
      compact: "p-4",
      detailed: "p-6 space-y-4",
      large: "p-6 space-y-4",
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

function Attraction({
  title,
  description,
  icons,
  image,
  variant,
  ...props
}: AttractionProps) {
  return (
    <div {...props}>
      <AttractionCard
        title={title}
        description={description}
        icons={icons}
        image={image}
        variant={variant}
      />
    </div>
  );
}

Attraction.displayName = "Attraction";
export { Attraction, attractionVariants };
