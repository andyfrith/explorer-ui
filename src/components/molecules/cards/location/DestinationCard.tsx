import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/atoms/card";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ThreeHourForecastCard } from "../weather/ThreeHourForecastCard";
import { MOCK_THREE_HOUR_FORECAST } from "@/data/mockThreeHourForecast";
import { WeatherCard } from "../weather/WeatherCard";
import { CloudSun, SunIcon } from "lucide-react";
import { CurrentWeather } from "@/components/atoms/CurrentWeather";

interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  article?: string;
  image: { src: string; alt: string; title: string };
  variant: "default" | "compact" | "full" | "detailed";
}
const destinationCardVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "max-w-sm",
      compact: "max-w-[220px] gap-2 p-2",
      detailed: "max-w-full",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function DestinationCard({
  name,
  description,
  article,
  image,
  variant = "default",
  ...props
}: DestinationCardProps) {
  return (
    <Card {...props} className={cn(destinationCardVariants({ variant }))}>
      <img
        src={image.src}
        alt={image.alt}
        title={image.title}
        className="relative aspect-video w-full object-cover max-h-[250px]"
      />
      <CardHeader className={cn(variant === "compact" && "p-0 m-0")}>
        <CardTitle
          className={cn(variant === "compact" && "text-xs font-bold p-0")}
        >
          {name}
        </CardTitle>
        {description && (
          <CardDescription className={cn(variant === "compact" && "text-xs")}>
            {variant === "compact"
              ? description.slice(0, 100) + "..."
              : description}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent>
        <div className="flex">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium">{article}</p>
          </div>
          <div className="flex flex-col gap-3">
            {variant === "detailed" && (
              <CurrentWeather
                icon={
                  <SunIcon className="w-10 h-10 md:w-10 md:h-10 text-cyan-400" />
                }
                title="Sunny"
                temperature={52}
                conditions="Partly Cloudy"
                apparentTemperature="Feels Like 47° · Day 66° · Night 46°"
                status="success"
                image={{
                  src: "/images/weather/partly-cloudy-day.jpg",
                  alt: "Partly Cloudy Day",
                  title: "Partly Cloudy Day",
                }}
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

DestinationCard.displayName = "DestinationCard";

export { DestinationCard, destinationCardVariants };
