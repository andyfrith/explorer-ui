import { cva } from "class-variance-authority";
import { type Destination } from "@/lib/types";
import { DestinationCard } from "@/components/molecules/cards/location/DestinationCard";

interface DestinationsProps extends React.HTMLAttributes<HTMLDivElement> {
  destinations: Array<Destination>;
  children?: React.ReactNode;
}

const destinationsVariants = cva("transition-all duration-200", {
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

function Destinations({ children, destinations, ...props }: DestinationsProps) {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination: Destination, index: number) => (
          <DestinationCard
            key={index}
            name={destination.name}
            description={destination.description}
            image={destination.image}
            variant="default"
          />
        ))}
      </div>
    </section>
  );
}

Destinations.displayName = "Destinations";
export { Destinations, destinationsVariants };
