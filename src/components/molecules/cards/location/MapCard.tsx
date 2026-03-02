import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/atoms/card";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import activities from "@/data/activities";
import { Map } from "@/components/molecules/maps/Map";

interface MapCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  latitude: number;
  longitude: number;
  variant?: "default" | "compact" | "large" | "full";
}
const mapCardVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "max-w-sm max-h-[320px] p-2",
      compact: "max-w-[220px] max-h-[220px] gap-2 p-2",
      large: "max-w-[625px] max-h-[425px] gap-2 p-2",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
export function MapCard({
  title,
  description,
  variant = "default",
  latitude,
  longitude,
  ...props
}: MapCardProps) {
  function dimensions() {
    if (variant === "full") {
      return;
    }
    if (variant === "default") {
      return {
        width: 350,
        height: 230,
      };
    }
    if (variant === "compact") {
      return {
        width: 190,
        height: 160,
      };
    }
    if (variant === "large") {
      return {
        width: 600,
        height: 350,
      };
    }
  }

  function zoom() {
    if (variant === "default") {
      return 8;
    }
    if (variant === "compact") {
      return 7;
    }
    if (variant === "large") {
      return 8;
    }
  }

  return (
    <Card {...props} className={cn(mapCardVariants({ variant }))}>
      <CardHeader className={cn(variant === "compact" && "p-0 m-0")}>
        {title && (
          <CardTitle
            className={cn(variant === "compact" && "text-xs font-bold p-0")}
          >
            {title}
          </CardTitle>
        )}
        {description && (
          <CardDescription className={cn(variant === "compact" && "text-xs")}>
            {description}
          </CardDescription>
        )}
      </CardHeader>
      {/* <CardContent className={cn(variant === "compact" && "p-0 m-0")}> */}

      <CardContent className="p-2 m-0">
        <Map
          variant={variant}
          latitude={latitude}
          longitude={longitude}
          zoom={zoom() || 10}
          markers={activities}
          onSelectMarker={(marker) => {
            console.log(marker);
          }}
          {...dimensions()}
        />
      </CardContent>
    </Card>
  );
}
