import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface CurrentWeatherProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode;
  image: { src: string; alt: string; title: string };
  title: string;
  temperature: number;
  conditions: string;
  apparentTemperature: string;
  children?: React.ReactNode;
  variant?: "default" | "compact" | "detailed";
  status?: "success" | "warning" | "error" | "info" | "neutral";
}

const currentWeatherVariants = cva("transition-all duration-200", {
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

const formatValue = (val: string | number) => {
  if (typeof val === "number") {
    return new Intl.NumberFormat().format(val);
  }
  return val;
};

function CurrentWeather({
  icon,
  image,
  title,
  temperature,
  conditions,
  apparentTemperature,
  children,
  variant = "default",
  ...props
}: CurrentWeatherProps) {
  return (
    <div
      className="text-white p-4"
      style={{
        backgroundImage: `url(${image.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "8px",
      }}
      {...props}
    >
      <div className="flex items-center gap-2">
        {icon}
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
      <div className={cn("font-medium", variant === "compact" && "text-xs")}>
        {apparentTemperature}
      </div>
    </div>
  );
}

CurrentWeather.displayName = "CurrentWeather";
export { CurrentWeather, currentWeatherVariants };
