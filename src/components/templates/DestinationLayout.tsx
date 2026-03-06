import { cva } from "class-variance-authority";
import { Header } from "../organisms/Header";
import { type Attraction, GeoPoint } from "@/lib/types";
import { itemsToMedia } from "@/lib/carousel";
import { destinations } from "@/data/destinations";
import { SwiperCarousel } from "@/components/molecules/SwiperCarousel";
import { Text } from "@/components/atoms/Text";

interface DestinationLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  latitude: number;
  longitude: number;
  zoom: number;
  markers: Array<GeoPoint>;
  attractions?: Attraction[];
  variant?: "default" | "compact" | "detailed";
}

const destinationLayoutVariants = cva(
  "transition-all duration-200 w-screen h-screen",
  {
    variants: {
      variant: {
        default: "p-6",
        compact: "p-4",
        detailed: "p-6 space-y-4",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function DestinationLayout({
  children,
  latitude,
  longitude,
  zoom,
  markers,
  attractions = [],
  variant = "default",
  ...props
}: DestinationLayoutProps) {
  const carouselItems = itemsToMedia(destinations);
  const attractionCarouselItems = itemsToMedia(attractions);
  return (
    <div {...props} className={destinationLayoutVariants({ variant })}>
      {children}
      <Header />
      <div className="py-16 px-6 max-w-7xl mx-auto space-y-16">
        <div className="flex justify-center" key="destinations-carousel">
          <SwiperCarousel
            key="destinations"
            className="destinations-carousel"
            variant="thumbnailsNav"
            items={carouselItems}
            showItemCaption
          />
        </div>
        {attractionCarouselItems.length > 0 && (
          <section
            className="space-y-6"
            aria-labelledby="attractions-heading"
            key="attractions-section"
          >
            <Text variant="h3">Attractions</Text>
            <div
              className="flex justify-center attractions-carousel-wrapper"
              key="attractions-carousel"
            >
              <SwiperCarousel
                key="attractions"
                className="attractions-carousel"
                variant="thumbnailsNav"
                items={attractionCarouselItems}
                showItemCaption
              />
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

DestinationLayout.displayName = "DestinationLayout";
export { DestinationLayout, destinationLayoutVariants };
