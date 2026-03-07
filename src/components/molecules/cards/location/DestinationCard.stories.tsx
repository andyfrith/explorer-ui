import type { Meta, StoryObj } from "@storybook/react-vite";
import { DestinationCard } from "@/components/molecules/cards/location/DestinationCard";

const meta: Meta<typeof DestinationCard> = {
  title: "Molecules/Cards/Location/DestinationCard",
  component: DestinationCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DestinationCard>;

export const Default: Story = {
  render: () => (
    <DestinationCard
      name="Alaska"
      description="Alaska is the largest state in the United States by area. It is known for its rugged terrain, snow-covered mountains, and the Northern Lights."
      image={{
        src: "/images/locations/Alaska.jpeg",
        alt: "Alaska",
        title: "Alaska",
      }}
      variant="default"
    />
  ),
};

export const Compact: Story = {
  render: () => (
    <DestinationCard
      name="Honolulu"
      description="Honolulu is the capital and most populous city of the United States state of Hawaii. The city is the county seat of Honolulu County and the seat of the State of Hawaii."
      image={{
        src: "/images/locations/HonoluluBeach.jpg",
        alt: "Honolulu",
        title: "Honolulu",
      }}
      variant="compact"
    />
  ),
};

export const Full: Story = {
  render: () => (
    <DestinationCard
      name="Honolulu"
      description="Honolulu is the capital and most populous city of the United States state of Hawaii. The city is the county seat of Honolulu County and the seat of the State of Hawaii."
      image={{
        src: "/images/locations/HonoluluBeach.jpg",
        alt: "Honolulu",
        title: "Honolulu",
      }}
      variant="full"
    />
  ),
};

export const Detailed: Story = {
  render: () => (
    <DestinationCard
      name="Honolulu"
      description="Honolulu is the capital and most populous city of the United States state of Hawaii. The city is the county seat of Honolulu County and the seat of the State of Hawaii."
      article="Exploring the concept of the “Pacific Century,” the Hawai‘i Triennial 2022 will be displayed until May at sites like the historic ‘Iolani Palace, while other new museums and experiences let visitors dive into Hawaiian history anytime. In Chinatown, the new Arts and Letters Nu‘uanu cultural space has exhibitions featuring local artists and those with ties to the islands and conversations with artists, often over ‘awa, a drink made from the root of the kava plant. Shangri La Museum of Islamic Art, Culture & Design examines the intersection of Hawaiian and Islamic culture. A serialized exhibition in its second year, 8×8 showcases the islands' visual and performance artists, while an upcoming artist residency pairs Chicago musician Zeshan Bagewadi with the Hawai‘i Symphony Orchestra. End any day onboard the new Kamoauli, a traditional Polynesian wooden double-hulled sailing canoe, offering sunset sails and a chance to learn about poi and hula."
      image={{
        src: "/images/locations/HonoluluBeach.jpg",
        alt: "Honolulu",
        title: "Honolulu",
      }}
      variant="detailed"
    />
  ),
};
