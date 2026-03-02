import type { Meta, StoryObj } from "@storybook/react-vite";
import { Attraction } from "./Attraction";
import { GlobeIcon, MapPinIcon, StarIcon } from "lucide-react";

const meta: Meta<typeof Attraction> = {
  title: "Organisms/Attraction",
  component: Attraction,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Attraction>;

export const Default: Story = {
  render: () => (
    <Attraction
      title="San Francisco, California, United States"
      description="San Francisco, located on a hilly California peninsula, is
a dense, culturally diverse, and innovative city renowned for its iconic Golden Gate Bridge,, historic cable cars, and Victorian architecture. It is a major financial and tech hub, blending a scenic waterfront, unpredictable foggy weather, and distinct, vibrant neighborhoods."
      icons={[
        <GlobeIcon className="w-4 h-4" />,
        <MapPinIcon className="w-4 h-4" />,
        <StarIcon className="w-4 h-4" />,
      ]}
      image={{
        src: "/images/locations/SanFranciscoSkyline.jpg",
        alt: "San Francisco",
        title: "San Francisco",
      }}
      variant="default"
    />
  ),
};
