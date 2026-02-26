import { useState } from "react";
import { cva } from "class-variance-authority";
import { Map } from "@/components/molecules/maps/Map";
import { ThreeHourForecastCard } from "@/components/molecules/cards/weather/ThreeHourForecastCard";

const hourForecasts = [
  {
    dt: 1714339200,
    tempMin: 20,
    tempMax: 25,
    iconId: "04d",
    humidity: 50,
  },
  {
    dt: 1714342800,
    tempMin: 21,
    tempMax: 26,
    iconId: "04d",
    humidity: 55,
  },
  {
    dt: 1714346400,
    tempMin: 22,
    tempMax: 27,
    iconId: "04d",
    humidity: 60,
  },
];

interface ForecastMapProps extends React.HTMLAttributes<HTMLDivElement> {
  latitude: number;
  longitude: number;
  zoom: number;
  markers?: Array<{ latitude: number; longitude: number }>;
  children?: React.ReactNode;
  variant?: "default" | "compact" | "detailed";
  status?: "success" | "warning" | "error" | "info" | "neutral";
}

const mapVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "p-0",
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

function ForecastMap({
  children,
  className,
  markers,
  ...props
}: ForecastMapProps) {
  const [currentMarker, setCurrentMarker] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  return (
    <div>
      <Map
        variant="default"
        latitude={props.latitude}
        longitude={props.longitude}
        zoom={props.zoom}
        markers={markers}
        onSelectMarker={(marker) => {
          setCurrentMarker(marker);
        }}
      />
      {currentMarker && (
        <div className="absolute py-4 top-50 right-10 w-[450px] outline-none">
          <ThreeHourForecastCard
            title={`${currentMarker.latitude}, ${currentMarker.longitude}`}
            description={`${currentMarker.latitude}, ${currentMarker.longitude}`}
            hourForecasts={hourForecasts}
            onDismiss={() => {
              setCurrentMarker(null);
            }}
          />
        </div>
      )}
    </div>
  );
}

ForecastMap.displayName = "ForecastMap";
export { ForecastMap, mapVariants };
