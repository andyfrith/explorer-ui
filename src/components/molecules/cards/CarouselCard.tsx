import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/atoms/card";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { SwiperCarousel } from "@/components/molecules/SwiperCarousel";
import type { Media } from "@/lib/types";

export interface CarouselCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Destination or card name */
  name: string;
  /** Short description */
  description: string;
  /** Carousel items (Media: image, thumbnailImage, type required) */
  items: Media[];
  /** Optional link URL; when set, the card is clickable */
  url?: string;
  /** Layout variant; thumbnailsNav uses SwiperCarousel with thumbnail navigation */
  variant?: "default" | "compact" | "full" | "detailed" | "thumbnailsNav";
}

const carouselCardVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "max-w-sm",
      compact: "max-w-[220px] gap-2 p-2",
      detailed: "max-w-full",
      full: "max-w-full",
      thumbnailsNav: "max-w-sm",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

/**
 * Card that shows a SwiperCarousel in place of a single image, with title and description.
 * Based on DestinationCard with the image slot replaced by a carousel.
 */
function CarouselCard({
  name,
  description,
  items,
  url,
  variant = "default",
  className,
  ...props
}: CarouselCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];
  const displayTitle = activeItem?.title ?? name;
  const displayDescription = activeItem?.description ?? description;
  const descriptionText =
    variant === "compact" && displayDescription
      ? displayDescription.slice(0, 100) + (displayDescription.length > 100 ? "..." : "")
      : displayDescription;

  return (
    <Card
      {...props}
      className={cn(
        carouselCardVariants({ variant }),
        "dark:bg-slate-800/50 dark:backdrop-blur-sm border rounded-2xl dark:border-slate-700 transition-all duration-300 overflow-hidden",
        url &&
          "hover:bg-gray-100 dark:hover:bg-gray-900 hover:shadow-lg hover:shadow-gray-900/10 hover:cursor-pointer dark:hover:border-cyan-500/50 hover:border-gray-900/50",
        className,
      )}
      onClick={() => {
        if (url) {
          window.location.href = url;
        }
      }}
    >
      <div className="relative w-full overflow-hidden rounded-t-2xl [&_.swiper]:rounded-t-2xl">
        <SwiperCarousel
          items={items}
          variant={variant === "thumbnailsNav" ? "thumbnailsNav" : "default"}
          showItemCaption={false}
          className="max-w-none! p-0! space-y-2!"
          onSlideChange={setActiveIndex}
        />
      </div>
      <CardHeader className={cn(variant === "compact" && "p-0 m-0")}>
        <CardTitle
          className={cn(variant === "compact" && "text-xs font-bold p-0")}
        >
          {displayTitle}
        </CardTitle>
        {descriptionText && (
          <CardDescription className={cn(variant === "compact" && "text-xs")}>
            {descriptionText}
          </CardDescription>
        )}
      </CardHeader>
    </Card>
  );
}

CarouselCard.displayName = "CarouselCard";

export { CarouselCard, carouselCardVariants };
