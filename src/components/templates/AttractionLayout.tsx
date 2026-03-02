import { cva } from "class-variance-authority";
import { Header } from "../organisms/Header";
import { AttractionCard } from "../molecules/cards/location/AttractionCard";
import { MapCard } from "../molecules/cards/location/MapCard";
import { AddressCard } from "../molecules/cards/AddressCard";
import { OperatingHoursCard } from "../molecules/cards/OperatingHoursCard";
import { ActivitiesCard } from "../molecules/cards/ActivitiesCard";
import { ThreeHourForecastCard } from "../molecules/cards/weather/ThreeHourForecastCard";
import { MOCK_THREE_HOUR_FORECAST } from "@/data/mockThreeHourForecast";

interface AttractionLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  title: string;
  description?: string;
  latitude: number;
  longitude: number;
  address: string;
  hours: Array<string>;
  icons?: Array<React.ReactNode>;
  image?: { src: string; alt: string; title: string };
  variant: "default" | "compact" | "large" | "full";
}

const attractionLayoutVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "p-6",
      compact: "p-4",
      large: "p-6 space-y-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function AttractionLayout({
  children,
  title,
  description,
  latitude,
  longitude,
  address,
  hours,
  icons,
  image,
  variant,
  ...props
}: AttractionLayoutProps) {
  return (
    <div {...props} className={"w-screen h-screen"}>
      {children}
      <Header />

      <div className="flex">
        <div className="flex flex-col">
          <AttractionCard
            title={title}
            description={description}
            icons={icons}
            image={image}
            variant={variant}
          />
          <MapCard
            latitude={latitude}
            longitude={longitude}
            variant={variant}
          />
          <ActivitiesCard
            title="Activities"
            description="USS Arizona Memorial Program"
            activities={[
              "Boat shuttle to the USS Arizona Memorial and visitor center exhibits.",
              "Duration: 75 minutes",
              "Price: Contact for price information",
            ]}
            variant={variant}
          />
          <AddressCard
            title="Address"
            description={title}
            address={address}
            variant={variant}
          />
          <OperatingHoursCard
            title="Operating Hours"
            description="Open daily"
            hours={hours}
            variant={variant}
          />
        </div>
        <div className="flex flex-col flex-1">
          <ThreeHourForecastCard
            title={title}
            description="-157.8597, 21.5475"
            hourForecasts={MOCK_THREE_HOUR_FORECAST}
            variant={variant}
          />
        </div>
      </div>
    </div>
  );
}

AttractionLayout.displayName = "AttractionLayout";
export { AttractionLayout, attractionLayoutVariants };
