import {
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/atoms/alert-dialog";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/atoms/card";
import { PlusIcon, BluetoothIcon } from "lucide-react";
import { Badge } from "@/components/atoms/badge";
import { AlertDialog } from "@/components/atoms/alert-dialog";
import { Button } from "@/components/atoms/button";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface CityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  city: string;
  state: string;
  country: string;
  description?: string;
  image: { src: string; alt: string; title: string };
  variant: "default" | "compact";
}
const cityCardVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "max-w-sm",
      compact: "max-w-[220px] gap-2 p-2",
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
export function CityCard({
  city,
  state,
  country,
  description,
  image,
  variant = "default",
  ...props
}: CityCardProps) {
  return (
    <Card {...props} className={cn(cityCardVariants({ variant }))}>
      {/* <Card {...props} className="relative w-full max-w-sm overflow-hidden pt-0"> */}

      <img
        src={image.src}
        alt={image.alt}
        title={image.title}
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader className={cn(variant === "compact" && "p-0 m-0")}>
        <CardTitle
          className={cn(variant === "compact" && "text-xs font-bold p-0")}
        >
          {city}, {state}, {country}
        </CardTitle>
        {description && (
          <CardDescription className={cn(variant === "compact" && "text-xs")}>
            {variant === "compact"
              ? description.slice(0, 100) + "..."
              : description}
          </CardDescription>
        )}
      </CardHeader>
    </Card>
  );
}
