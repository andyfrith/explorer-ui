import type { Meta, StoryObj } from "@storybook/react-vite";
import { AttractionLayout } from "@/components/templates/AttractionLayout";
import { GlobeIcon, MapPinIcon, StarIcon } from "lucide-react";

const meta: Meta<typeof AttractionLayout> = {
  title: "Templates/AttractionLayout",
  component: AttractionLayout,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AttractionLayout>;

export const Default: Story = {
  render: () => (
    <AttractionLayout
      title="Pearl Harbor National Memorial"
      description="A historic site commemorating the attack on Pearl Harbor and honoring those who served. Includes the USS Arizona Memorial, Battleship Missouri Memorial, and Pacific Aviation Museum."
      icons={[
        <GlobeIcon className="w-4 h-4" />,
        <MapPinIcon className="w-4 h-4" />,
        <StarIcon className="w-4 h-4" />,
      ]}
      image={{
        src: "/images/locations/PearlHarborMemorial.jpg",
        alt: "Pearl Harbor",
        title: "Pearl Harbor",
      }}
      latitude={21.3654}
      longitude={-157.9499}
      hours={[
        "Monday: 7:00 AM - 5:00 PM",
        "Tuesday: 7:00 AM - 5:00 PM",
        "Wednesday: 7:00 AM - 5:00 PM",
        "Thursday: 7:00 AM - 5:00 PM",
        "Friday: 7:00 AM - 5:00 PM",
        "Saturday: 7:00 AM - 5:00 PM",
        "Sunday: 7:00 AM - 5:00 PM",
      ]}
      address="1 Arizona Memorial Place, Honolulu, HI 96818"
      variant="default"
    />
  ),
};

export const Compact: Story = {
  render: () => (
    <AttractionLayout
      title="Pearl Harbor National Memorial"
      description="A historic site commemorating the attack on Pearl Harbor and honoring those who served. Includes the USS Arizona Memorial, Battleship Missouri Memorial, and Pacific Aviation Museum."
      icons={[
        <GlobeIcon className="w-4 h-4" />,
        <MapPinIcon className="w-4 h-4" />,
        <StarIcon className="w-4 h-4" />,
      ]}
      image={{
        src: "/images/locations/PearlHarborMemorial.jpg",
        alt: "Pearl Harbor",
        title: "Pearl Harbor",
      }}
      latitude={21.3654}
      longitude={-157.9499}
      hours={[
        "MON: 7:00 AM - 5:00 PM",
        "TUE: 7:00 AM - 5:00 PM",
        "WED: 7:00 AM - 5:00 PM",
        "THU: 7:00 AM - 5:00 PM",
        "FRI: 7:00 AM - 5:00 PM",
        "SAT: 7:00 AM - 5:00 PM",
        "SUN: 7:00 AM - 5:00 PM",
      ]}
      address="1 Arizona Memorial Place, Honolulu, HI 96818"
      variant="compact"
    />
  ),
};

export const Large: Story = {
  render: () => (
    <AttractionLayout
      title="Pearl Harbor National Memorial"
      description="A historic site commemorating the attack on Pearl Harbor and honoring those who served. Includes the USS Arizona Memorial, Battleship Missouri Memorial, and Pacific Aviation Museum."
      icons={[
        <GlobeIcon className="w-4 h-4" />,
        <MapPinIcon className="w-4 h-4" />,
        <StarIcon className="w-4 h-4" />,
      ]}
      image={{
        src: "/images/locations/PearlHarborMemorial.jpg",
        alt: "Pearl Harbor",
        title: "Pearl Harbor",
      }}
      latitude={21.3654}
      longitude={-157.9499}
      hours={[
        "Monday: 7:00 AM - 5:00 PM",
        "Tuesday: 7:00 AM - 5:00 PM",
        "Wednesday: 7:00 AM - 5:00 PM",
        "Thursday: 7:00 AM - 5:00 PM",
        "Friday: 7:00 AM - 5:00 PM",
        "Saturday: 7:00 AM - 5:00 PM",
        "Sunday: 7:00 AM - 5:00 PM",
      ]}
      address="1 Arizona Memorial Place, Honolulu, HI 96818"
      variant="large"
    />
  ),
};

export const Full: Story = {
  render: () => (
    <AttractionLayout
      title="Pearl Harbor National Memorial"
      description="A historic site commemorating the attack on Pearl Harbor and honoring those who served. Includes the USS Arizona Memorial, Battleship Missouri Memorial, and Pacific Aviation Museum."
      icons={[
        <GlobeIcon className="w-4 h-4" />,
        <MapPinIcon className="w-4 h-4" />,
        <StarIcon className="w-4 h-4" />,
      ]}
      image={{
        src: "/images/locations/PearlHarborMemorial.jpg",
        alt: "Pearl Harbor",
        title: "Pearl Harbor",
      }}
      latitude={21.3654}
      longitude={-157.9499}
      hours={[
        "Monday: 7:00 AM - 5:00 PM",
        "Tuesday: 7:00 AM - 5:00 PM",
        "Wednesday: 7:00 AM - 5:00 PM",
        "Thursday: 7:00 AM - 5:00 PM",
        "Friday: 7:00 AM - 5:00 PM",
        "Saturday: 7:00 AM - 5:00 PM",
        "Sunday: 7:00 AM - 5:00 PM",
      ]}
      address="1 Arizona Memorial Place, Honolulu, HI 96818"
      variant="full"
    />
  ),
};
