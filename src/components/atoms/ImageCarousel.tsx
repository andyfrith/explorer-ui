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

// )
// return (
//   <div {...props}>
//     <header className="p-2 flex items-center text-white">
//       <div className="flex flex-row justify-center items-center gap-2 ml-0 text-xl font-semibold">
//         <Link
//           to="/"
//           className="flex flex-row justify-center items-center gap-2"
//         >
//           {logo}

//           <span className="dark:text-gray-300 text-3xl md:text-3xl font-black text-gray-500 tracking-[-0.02em]">
//             {title}
//           </span>
//           <span className="text-gray-300 text-3xl md:text-3xl font-black tracking-[-0.02em] bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//             {subtitle}
//           </span>
//         </Link>
//       </div>
//     </header>
//     {children}
//   </div>
// );
// }

ImageCarousel.displayName = "ImageCarousel";
export { ImageCarousel, imageCarouselVariants };
