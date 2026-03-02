import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/atoms/card";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface AttractionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icons?: Array<React.ReactNode>;
  image?: { src: string; alt: string; title: string };
  variant?: "default" | "compact" | "large" | "full";
}
const attractionCardVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "max-w-sm",
      compact: "max-w-[220px] gap-2 p-2",
      large: "max-w-[625px] gap-2 p-2",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function AttractionCard({
  title,
  icons,
  description,
  image,
  variant = "default",
  ...props
}: AttractionCardProps) {
  return (
    <Card {...props} className={cn(attractionCardVariants({ variant }))}>
      {image && (
        <img
          src={image.src}
          alt={image.alt}
          title={image.title}
          className="relative aspect-video w-full object-cover"
        />
      )}

      <CardHeader className={cn(variant === "compact" && "p-0 m-0")}>
        {icons && (
          <div className="flex flex-row gap-2">
            {icons.map((icon, index) => (
              <div key={index}>{icon}</div>
            ))}
          </div>
        )}
        <CardTitle
          className={cn(variant === "compact" && "text-xs font-bold p-0")}
        >
          {title}
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

AttractionCard.displayName = "AttractionCard";

export { AttractionCard, attractionCardVariants };
