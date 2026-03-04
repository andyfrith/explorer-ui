import { cva } from "class-variance-authority";
import { type Destination } from "@/lib/types";
import { DestinationCard } from "@/components/molecules/cards/location/DestinationCard";
import { cn } from "@/lib/utils";

interface DestinationsProps extends React.HTMLAttributes<HTMLDivElement> {
  destinations: Array<Destination>;
  children?: React.ReactNode;
  variant?: "default" | "compact" | "detailed" | "aside";
}

const destinationsVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "py-16 px-6 max-w-7xl mx-auto",
      // default: "p-2",
      compact: "p-2",
      detailed: "p-2 space-y-4",
      aside: "p-2",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Destinations({
  children,
  destinations,
  variant = "default",
  ...props
}: DestinationsProps) {
  // py-16 px-6 max-w-7xl mx-auto
  return (
    <section {...props} className={cn(destinationsVariants({ variant }))}>
      <div
        className={cn(
          "grid grid-cols-1 gap-6",
          variant !== "aside" && "md:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {destinations.map((destination: Destination, index: number) => (
          <DestinationCard
            key={index}
            name={destination.name}
            description={destination.description}
            image={destination.image}
            variant={variant === "aside" ? "compact" : variant}
          />
        ))}
      </div>
    </section>
  );
}

Destinations.displayName = "Destinations";
export { Destinations, destinationsVariants };
