import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/atoms/card";
import { HourForecastTable } from "../../tables/weather/HourForecastTable";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/atoms/button";
import { CircleXIcon } from "lucide-react";

type HourForecast = {
  dt: number;
  tempMin: number;
  tempMax: number;
  icon?: React.ReactNode;
  iconId: string;
  humidity: number;
};

interface ThreeHourForecastCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hourForecasts: HourForecast[];
  title?: string;
  description?: string;
  variant?: "default" | "compact" | "detailed";
  status?: "success" | "warning" | "error" | "info" | "neutral";
  onDismiss?: () => void;
}

const threeHourForecastCardVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "p-6",
      compact: "p-4",
      detailed: "p-6 space-y-4",
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

function ThreeHourForecastCard({
  title,
  description,
  hourForecasts,
  variant = "default",
  status = "neutral",
  className,
  onDismiss,
  ...props
}: ThreeHourForecastCardProps) {
  return (
    <Card {...props} className="relative">
      <CardHeader
        className={cn(
          "flex flex-row items-center justify-between space-y-0",
          variant === "compact" && "pb-2",
        )}
      >
        <div className="space-y-1">
          {title && (
            <CardTitle
              className={cn(variant === "compact" ? "text-sm" : "text-base")}
            >
              {title}
            </CardTitle>
          )}
          {description && (
            <CardDescription className={cn(variant === "compact" && "text-xs")}>
              {description}
            </CardDescription>
          )}
        </div>
        <CardAction>
          {onDismiss && (
            <Button variant="ghost" size="icon" onClick={onDismiss}>
              <CircleXIcon className="size-6" />
            </Button>
          )}
        </CardAction>
      </CardHeader>
      <CardContent>
        <HourForecastTable hourForecasts={hourForecasts} />
      </CardContent>
    </Card>
  );
}

ThreeHourForecastCard.displayName = "ThreeHourForecastCard";

export { ThreeHourForecastCard, threeHourForecastCardVariants };
