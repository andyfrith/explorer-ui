import { cva } from "class-variance-authority";
import { Hero } from "../molecules/Hero";
import { Header } from "../organisms/Header";
import { GeoPoint } from "@/lib/types";
import { Branding } from "../atoms/Branding";
import { SunIcon } from "lucide-react";
import { destinations } from "@/data/destinations";
import { Destinations } from "@/components/molecules/Destinations";

interface DestinationsLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  latitude: number;
  longitude: number;
  zoom: number;
  markers: Array<GeoPoint>;
}

const destinationsLayoutVariants = cva("transition-all duration-200", {
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

function DestinationsLayout({
  children,
  latitude,
  longitude,
  zoom,
  markers,
  ...props
}: DestinationsLayoutProps) {
  return (
    <div {...props} className={"w-screen h-screen"}>
      {children}
      <Header />
      <Hero
        cta={
          <div className="flex flex-col items-center gap-4">
            <a
              href="https://tanstack.com/start"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50"
            >
              Let's Go!
            </a>
          </div>
        }
        logo={
          <Branding
            logo={
              <SunIcon className="w-10 h-10 md:w-10 md:h-10 text-cyan-400" />
            }
            title="EXPLORER"
            subtitle="UI"
          />
        }
        headline="Are you ready for your next great adventure?"
        subheadline="Dreaming of a tropical paradise? Or is it time to explore the great wilderness?  Perhaps it's shopping, museums and world-class entertainment you long for?"
      />
      <Destinations destinations={destinations} />
    </div>
  );
}

DestinationsLayout.displayName = "DestinationsLayout";
export { DestinationsLayout, destinationsLayoutVariants };
