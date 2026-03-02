import { useMemo, useRef } from "react";
import { cva } from "class-variance-authority";
import { Map as MapLibreMap, MapRef, Marker } from "@vis.gl/react-maplibre";
import Pin from "@/components/atoms/Pin";
import { GeoPoint } from "@/lib/types";
import { cn } from "@/lib/utils";

interface MapProps extends React.HTMLAttributes<HTMLDivElement> {
  latitude: number;
  longitude: number;
  zoom: number;
  markers?: Array<GeoPoint>;
  width?: number;
  height?: number;
  onSelectMarker?: (marker: GeoPoint) => void;
  children?: React.ReactNode;
  variant?: "default" | "compact" | "large" | "full";
}

const mapVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "p-0",
      compact: "p-0",
      large: "max-w-full max-h-full",
      full: "max-w-full",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Map({
  children,
  className,
  markers,
  width,
  height,
  onSelectMarker,
  variant = "default",
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
    <div
      id="map"
      {...props}
      className={cn(mapVariants({ variant }))}
      style={{
        width: width ?? "100vh",
        height: height ?? "100vh",
        paddingBottom: 10,
      }}
    >
      <MapLibreMap
        ref={mapRef}
        attributionControl={false}
        style={{
          borderRadius: "10px",
        }}
        initialViewState={{ ...props, bearing: 0, pitch: 0 }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        padding={{ top: 10, right: 10, bottom: 10, left: 10 }}
      >
        {markers && pins}
      </MapLibreMap>
    </div>
  );
}

Map.displayName = "Map";
export { Map, mapVariants };
