import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/atoms/card";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface CityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  city: string;
  state: string;
  country: string;
  description?: string;
  image: { src: string; alt: string; title: string };
  variant: "default" | "compact" | "full";
}
const cityCardVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "max-w-sm",
      compact: "max-w-[220px] gap-2 p-2",
      detailed: "p-6 space-y-4",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function CityCard({
  city,
  state,
  country,
  description,
  image,
  variant = "default",
  ...props
}: CityCardProps) {
  return (
    <Card {...props} className={cn(cityCardVariants({ variant }))}>
      <img
        src={image.src}
        alt={image.alt}
        title={image.title}
        className="relative aspect-video w-full object-cover"
      />
      <CardHeader className={cn(variant === "compact" && "p-0 m-0")}>
        <CardTitle
          className={cn(variant === "compact" && "text-xs font-bold p-0")}
        >
          {city}, {state}, {country}
        </CardTitle>
        {description && (
          <CardDescription className={cn(variant === "compact" && "text-xs")}>
            {variant === "compact"
              ? description.slice(0, 100) + "..."
              : description}
          </CardDescription>
        )}
      </CardHeader>
    </Card>
  );
}

CityCard.displayName = "CityCard";

export { CityCard, cityCardVariants };
