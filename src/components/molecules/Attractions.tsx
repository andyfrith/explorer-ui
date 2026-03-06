import { cva } from "class-variance-authority";
import { type Attraction, Media, MediaType } from "@/lib/types";
import { AttractionCard } from "@/components/molecules/cards/location/AttractionCard";
import { SwiperCarousel } from "@/components/molecules/SwiperCarousel";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AttractionsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Attractions to display. */
  attractions: Attraction[];
  children?: React.ReactNode;
  /** Layout: "grid" (default) or "carousel". */
  display?: "grid" | "carousel";
  variant?: "default" | "compact" | "detailed" | "aside";
}

/** Maps Attraction data to Media format for SwiperCarousel. */
function attractionsToMedia(attractions: Attraction[]): Media[] {
  return attractions.map((a) => {
    const first = a.media[0];
    return {
      title: a.name,
      description: a.description,
      image: first?.image ?? "",
      thumbnailImage: first?.thumbnailImage ?? first?.image ?? "",
      type: MediaType.IMAGE,
      altText: first?.altText,
    };
  });
}

const attractionsVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "py-16 px-6 max-w-7xl mx-auto",
      compact: "p-2",
      detailed: "p-2 space-y-4",
      aside: "p-2",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

function Attractions({
  children,
  attractions,
  display = "grid",
  variant = "default",
  ...props
}: AttractionsProps) {
  if (display === "carousel") {
    const carouselItems = attractionsToMedia(attractions);
    return (
      <section {...props} className={cn(attractionsVariants({ variant }))}>
        <div className="flex justify-center">
          <SwiperCarousel
            variant="thumbnailsNav"
            items={carouselItems}
            showItemCaption
          />
        </div>
      </section>
    );
  }

  return (
    <section {...props} className={cn(attractionsVariants({ variant }))}>
      <div
        className={cn(
          "grid grid-cols-1 gap-6",
          variant !== "aside" && "md:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {attractions.map((attraction: Attraction, index: number) => (
          <motion.div
            key={attraction.id}
            initial="initial"
            animate="animate"
            variants={fadeInAnimationVariants}
            custom={index}
          >
            <AttractionCard
              title={attraction.name}
              description={attraction.description}
              image={{
                src: attraction.media[0]?.image ?? "",
                alt: attraction.media[0]?.altText ?? attraction.name,
                title: attraction.media[0]?.title ?? attraction.name,
              }}
              variant={
                variant === "aside"
                  ? "compact"
                  : variant === "detailed"
                    ? "large"
                    : variant
              }
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

Attractions.displayName = "Attractions";
export { Attractions, attractionsVariants };
