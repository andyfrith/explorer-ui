import { CITIES } from "@/data/oahu/cities";
import { cva } from "class-variance-authority";
import { ForecastMapLayout } from "../templates/ForecastMapLayout";

interface ForecastMapPageProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const forecastMapPageVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "p-6",
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

function ForecastMapPage({ children, ...props }: ForecastMapPageProps) {
  return (
    <div {...props}>
      {children}
      <ForecastMapLayout
        latitude={21.3935}
        longitude={-157.9564}
        zoom={10}
        markers={CITIES}
      />
    </div>
  );
}

ForecastMapPage.displayName = "ForecastMapPage";
export { ForecastMapPage, forecastMapPageVariants };
