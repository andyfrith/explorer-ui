import type { Meta, StoryObj } from "@storybook/react-vite";
import { AttractionCard } from "@/components/molecules/cards/location/AttractionCard";
import { GlobeIcon, MapPinIcon, StarIcon } from "lucide-react";

const meta: Meta<typeof AttractionCard> = {
  title: "Molecules/Cards/Location/AttractionCard",
  component: AttractionCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AttractionCard>;

export const Default: Story = {
  render: () => (
    <AttractionCard
      title="Honolulu, Hawaii, United States"
      description="Honolulu, located on the island of Oahu, is the capital and most populous city of the U.S. state of Hawaii. It is the seat of the Honolulu County, the most populous county in the state.  It is known for its beautiful beaches, clear waters, and warm weather."
      icons={[
        <GlobeIcon className="w-4 h-4" />,
        <MapPinIcon className="w-4 h-4" />,
        <StarIcon className="w-4 h-4" />,
      ]}
      image={{
        src: "/images/locations/HonoluluBeach.jpg",
        alt: "Honolulu",
        title: "Honolulu",
      }}
      variant="default"
    />
  ),
};

export const Compact: Story = {
  render: () => (
    <AttractionCard
      title="Honolulu, Hawaii, United States"
      description="Honolulu, located on the island of Oahu, is the capital and most populous city of the U.S. state of Hawaii. It is the seat of the Honolulu County, the most populous county in the state.  It is known for its beautiful beaches, clear waters, and warm weather."
      icons={[
        <GlobeIcon className="w-3 h-3" />,
        <MapPinIcon className="w-3 h-3" />,
        <StarIcon className="w-3 h-3" />,
      ]}
      image={{
        src: "/images/locations/HonoluluBeach.jpg",
        alt: "Honolulu",
        title: "San Francisco",
      }}
      variant="compact"
    />
  ),
};

export const Large: Story = {
  render: () => (
    <AttractionCard
      title="Honolulu, Hawaii, United States"
      description="Honolulu, located on the island of Oahu, is the capital and most populous city of the U.S. state of Hawaii. It is the seat of the Honolulu County, the most populous county in the state.  It is known for its beautiful beaches, clear waters, and warm weather."
      icons={[
        <GlobeIcon className="w-4 h-4" />,
        <MapPinIcon className="w-4 h-4" />,
        <StarIcon className="w-4 h-4" />,
      ]}
      image={{
        src: "/images/locations/HonoluluBeach.jpg",
        alt: "Honolulu",
        title: "Honolulu",
      }}
      variant="large"
    />
  ),
};

export const Full: Story = {
  render: () => (
    <AttractionCard
      title="Honolulu, Hawaii, United States"
      description="Honolulu, located on the island of Oahu, is the capital and most populous city of the U.S. state of Hawaii. It is the seat of the Honolulu County, the most populous county in the state.  It is known for its beautiful beaches, clear waters, and warm weather."
      icons={[
        <GlobeIcon className="w-4 h-4" />,
        <MapPinIcon className="w-4 h-4" />,
        <StarIcon className="w-4 h-4" />,
      ]}
      image={{
        src: "/images/locations/HonoluluBeach.jpg",
        alt: "Honolulu",
        title: "Honolulu",
      }}
      variant="full"
    />
  ),
};
