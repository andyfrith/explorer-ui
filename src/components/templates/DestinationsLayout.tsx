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
  display?: "grid" | "carousel";
}

const destinationsLayoutVariants = cva("transition-all duration-200", {
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
});

function DestinationsLayout({
  children,
  latitude,
  longitude,
  zoom,
  markers,
  display = "grid",
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
      <Destinations destinations={destinations} display={display} />
    </div>
  );
}

DestinationsLayout.displayName = "DestinationsLayout";
export { DestinationsLayout, destinationsLayoutVariants };
