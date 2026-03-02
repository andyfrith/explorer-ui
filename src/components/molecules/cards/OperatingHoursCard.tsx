import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";

interface OperatingHoursCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  hours: Array<string>;
  variant?: "default" | "compact" | "large" | "full";
}

const operatingHoursCardVariants = cva("transition-all duration-200", {
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

function OperatingHoursCard({
  title,
  description,
  hours,
  variant = "default",
  className,
  ...props
}: OperatingHoursCardProps) {
  return (
    <Card
      {...props}
      className={cn(operatingHoursCardVariants({ variant, className }))}
    >
      {/* Card Header with title and description */}
      <CardHeader
        className={cn(
          "flex flex-row items-center justify-between space-y-0",
          variant === "compact" && "pb-2",
        )}
      >
        <div className="space-y-1">
          <CardTitle
            className={cn(variant === "compact" ? "text-sm" : "text-base")}
          >
            {title}
          </CardTitle>
          {description && (
            <CardDescription className={cn(variant === "compact" && "text-xs")}>
              {description}
            </CardDescription>
          )}
        </div>
      </CardHeader>
      <CardContent className={cn(variant === "compact" && "pt-0")}>
        <div className="flex items-baseline gap-2">
          <div className={cn(variant === "compact" ? "text-xs" : "text-sm")}>
            {hours.map((hour) => (
              <div key={hour}>{hour}</div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

OperatingHoursCard.displayName = "OperatingHoursCard";

export { OperatingHoursCard, operatingHoursCardVariants };
