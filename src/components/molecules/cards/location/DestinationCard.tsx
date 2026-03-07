import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/atoms/card";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { SunIcon } from "lucide-react";
import { CurrentWeather } from "@/components/atoms/CurrentWeather";
import { Text } from "@/components/atoms/Text";
import { ImageCarousel } from "@/components/atoms/ImageCarousel";
import { Quote } from "@/components/atoms/Quote";

interface DestinationCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  article?: string;
  image: { src: string; alt: string; title: string };
  url?: string;
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
  url,
  variant = "default",
  ...props
}: DestinationCardProps) {
  return (
    <Card
      {...props}
      className={cn(
        destinationCardVariants({ variant }),
        "dark:bg-slate-800/50 dark:backdrop-blur-sm border rounded-2xl dark:border-slate-700 transition-all duration-300",
        url &&
          "hover:bg-gray-100 dark:hover:bg-gray-900 hover:shadow-lg hover:shadow-gray-900/10 hover:cursor-pointer dark:hover:border-cyan-500/50 hover:border-gray-900/50",
      )}
      onClick={() => {
        if (url) {
          window.location.href = url;
        }
      }}
    >
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
      {variant === "detailed" && (
        <CardContent>
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              <ImageCarousel
                images={[
                  "/images/locations/HonoluluBeach.jpg",
                  "/images/locations/Alaska.jpeg",
                  "/images/locations/Paris.webp",
                  "/images/locations/SanFranciscoSkyline.jpg",
                  "/images/locations/qiddiya-performing-arts-centre.webp",
                  "/images/locations/NewYorkStatueofLiberty.avif",
                ]}
                variant="default"
              />
              {article && <Text variant="p">{article}</Text>}
            </div>
            <div className="flex flex-col gap-3">
              <Quote
                quote="Be the Aloha you wish to see in the world."
                author="Anonymous"
                variant="aside"
              />
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
              {/* <Destinations destinations={destinations} variant="aside" /> */}
            </div>
          </div>
        </CardContent>
      )}
    </Card>
  );
}

DestinationCard.displayName = "DestinationCard";

export { DestinationCard, destinationCardVariants };
