import { useState } from "react";
import { cva } from "class-variance-authority";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/lib/utils";
import type { Media } from "@/lib/types";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface SwiperCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Media[];
  variant?: "default" | "compact" | "thumbnailsNav";
  /** When true, show each item's title and description overlay on the image. Default true. */
  showItemCaption?: boolean;
  /** Called when the active slide index changes */
  onSlideChange?: (index: number) => void;
}

const swiperCarouselVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "p-2",
      compact: "p-2",
      thumbnailsNav: "p-2 space-y-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function SwiperCarousel({
  items,
  variant = "default",
  showItemCaption = true,
  className,
  onSlideChange,
  ...props
}: SwiperCarouselProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const showThumbnails = variant === "thumbnailsNav";
  const showCaption = showItemCaption;

  return (
    <div
      {...props}
      className={cn(
        swiperCarouselVariants({ variant }),
        "w-full max-w-4xl",
        showThumbnails && "space-y-4",
      )}
    >
      <Swiper
        modules={showThumbnails ? [FreeMode, Navigation, Pagination, Thumbs] : [FreeMode, Navigation, Pagination]}
        navigation
        thumbs={showThumbnails ? { swiper: thumbsSwiper } : undefined}
        pagination={{ clickable: true }}
        spaceBetween={10}
        className="rounded-lg"
        onSlideChange={onSlideChange ? (swiper) => onSlideChange(swiper.activeIndex) : undefined}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg">
              {item.url ? (
                <a
                  href={item.url}
                  className="block size-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.image}
                    alt={item.altText ?? item.title ?? `Slide ${index + 1}`}
                    className="object-cover size-full"
                  />
                  {showCaption && (item.title ?? item.description) && (
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-3 text-white text-sm">
                      {item.title && <div className="font-semibold">{item.title}</div>}
                      {item.description && <div className="text-white/90">{item.description}</div>}
                    </div>
                  )}
                </a>
              ) : (
                <>
                  <img
                    src={item.image}
                    alt={item.altText ?? item.title ?? `Slide ${index + 1}`}
                    className="object-cover size-full"
                  />
                  {showCaption && (item.title ?? item.description) && (
                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-3 text-white text-sm">
                      {item.title && <div className="font-semibold">{item.title}</div>}
                      {item.description && <div className="text-white/90">{item.description}</div>}
                    </div>
                  )}
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {showThumbnails && (
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[FreeMode, Navigation, Thumbs]}
          spaceBetween={10}
          slidesPerView={3}
          freeMode
          watchSlidesProgress
          className="rounded-lg"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index} className="cursor-pointer">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <img
                  src={item.thumbnailImage}
                  alt={item.altText ?? item.title ?? `Thumbnail ${index + 1}`}
                  className="object-cover size-full"
                />
                {item.title && (
                  <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-2 py-1.5 text-white text-xs font-medium truncate">
                    {item.title}
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

SwiperCarousel.displayName = "SwiperCarousel";
export { SwiperCarousel, swiperCarouselVariants };
