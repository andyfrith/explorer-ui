import { useMemo, useRef } from "react";
import { cva } from "class-variance-authority";
import { Map as MapLibreMap, MapRef, Marker } from "@vis.gl/react-maplibre";
import Pin from "@/components/atoms/Pin";

interface MapProps extends React.HTMLAttributes<HTMLDivElement> {
  latitude: number;
  longitude: number;
  zoom: number;
  markers?: Array<{ latitude: number; longitude: number }>;
  onSelectMarker?: (marker: { latitude: number; longitude: number }) => void;
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

function Map({
  children,
  className,
  markers,
  onSelectMarker,
  ...props
}: MapProps) {
  const mapRef = useRef<MapRef>(null);

  const pins = useMemo(
    () =>
      markers?.map((marker) => (
        <Marker
          key={`marker-${marker.longitude}-${marker.latitude}`}
          longitude={marker.longitude}
          latitude={marker.latitude}
          anchor="bottom"
          onClick={(e) => {
            e.originalEvent.stopPropagation();
            mapRef.current?.flyTo({
              center: [marker.longitude, marker.latitude],
              duration: 1000,
              zoom: 12,
            });
            onSelectMarker?.(marker);
          }}
        >
          <Pin />
        </Marker>
      )),
    [],
  );
  return (
    <div id="map" className="w-screen h-screen" {...props}>
      <MapLibreMap
        ref={mapRef}
        style={{ width: "100%", height: "100%", borderRadius: "10px" }}
        initialViewState={{ ...props, bearing: 0, pitch: 0 }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      >
        {markers && pins}
      </MapLibreMap>
    </div>
  );
}

Map.displayName = "Map";
export { Map, mapVariants };
