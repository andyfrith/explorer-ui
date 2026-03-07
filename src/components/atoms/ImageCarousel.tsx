import { cva } from "class-variance-authority";
import { Card, CardContent } from "@/components/atoms/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/atoms/carousel";
import { cn } from "@/lib/utils";

interface ImageCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[];
  variant?: "default" | "compact" | "detailed";
}

const imageCarouselVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "p-2",
      compact: "p-2",
      detailed: "p-2 space-y-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function ImageCarousel({
  images,
  variant = "default",
  className,
  ...props
}: ImageCarouselProps) {
  return (
    <div
      {...props}
      className={cn(imageCarouselVariants({ variant, className }))}
    >
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-48 sm:max-w-xs md:max-w-sm ml-9"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="p-0">
                  <CardContent className="flex aspect-square items-center justify-center p-3">
                    <img
                      src={image}
                      alt={`Image ${index + 1}`}
                      title={`Image ${index + 1}`}
                      className="w-full object-cover h-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

ImageCarousel.displayName = "ImageCarousel";
export { ImageCarousel, imageCarouselVariants };
