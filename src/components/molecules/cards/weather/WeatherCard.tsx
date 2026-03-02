import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { CurrentWeather } from "@/components/atoms/CurrentWeather";

interface WeatherCardProps extends React.HTMLAttributes<HTMLDivElement> {
  weatherIcon: React.ReactNode;
  weatherImage: { src: string; alt: string; title: string };
  title?: string;
  description?: string;
  apparentTemperature: string;
  temperature: number;
  conditions: string;
  outlook: string;
  change?: {
    value: number;
    period: string;
    trend: "up" | "down" | "neutral";
  };
  variant?: "default" | "compact" | "detailed";
  status?: "success" | "warning" | "error" | "info" | "neutral";
}

const weatherCardVariants = cva("transition-all duration-200", {
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

// Helper function to format numeric values with locale-aware formatting
const formatValue = (val: string | number) => {
  if (typeof val === "number") {
    return new Intl.NumberFormat().format(val);
  }
  return val;
};

function WeatherCard({
  title,
  apparentTemperature,
  description,
  temperature,
  conditions,
  outlook,
  change,
  weatherIcon,
  weatherImage,
  variant = "default",
  status = "neutral",
  className,
  ...props
}: WeatherCardProps) {
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
      </CardHeader>
      <CardContent className={cn("py-4 ", variant === "compact" && "pt-0")}>
        <CurrentWeather
          icon={weatherIcon}
          image={weatherImage}
          title={title || ""}
          temperature={temperature}
          conditions={conditions}
          apparentTemperature={apparentTemperature}
          variant={variant}
          status={status}
        />
        {/* <div
          className="text-white p-4"
          style={{
            backgroundImage: `url(${weatherImage.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
          }}
        >
          <div className="flex items-center gap-2">
            {weatherIcon}
            <div
              className={cn(
                "font-medium relative z-21",
                variant === "compact" ? "text-xl" : "text-5xl lg:text-5xl",
              )}
            >
              {formatValue(temperature)}°
            </div>
          </div>
          <div
            className={cn(
              "font-extrabold",
              variant === "compact" ? "text-xs" : "text-2xl",
            )}
          >
            {conditions}
          </div>
          <div
            className={cn("font-medium", variant === "compact" && "text-xs")}
          >
            {apparentTemperature}
          </div>
        </div> */}
      </CardContent>
      {/* <CardContent className={cn('py-4', variant === 'compact' && 'pt-0')}>
        <div className="bg-primary absolute inset-0 z-30 aspect-video opacity-50 mix-blend-color" />
        <img
          src="https://images.unsplash.com/photo-1604076850742-4c7221f3101b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Photo by mymind on Unsplash"
          title="Photo by mymind on Unsplash"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale"
        />
        <div
          className={cn(
            'font-bold relative z-21',
            variant === 'compact' ? 'text-xl' : 'text-2xl lg:text-3xl',
          )}
        >
          {formatValue(temperature)}°
        </div>
        <div className={cn(variant === 'compact' && 'text-xs')}>
          {conditions}
        </div>
        <div className={cn(variant === 'compact' && 'text-xs')}>
          {apparentTemperature}
        </div>
      </CardContent> */}
    </Card>
  );
}

WeatherCard.displayName = "WeatherCard";

export { WeatherCard, weatherCardVariants };
