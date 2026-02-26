import type { Meta, StoryObj } from "@storybook/react-vite";
import { CityCard } from "@/components/molecules/cards/location/CityCard";

const meta: Meta<typeof CityCard> = {
  title: "Molecules/Cards/Location/CityCard",
  component: CityCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CityCard>;

export const Default: Story = {
  render: () => (
    <CityCard
      city="San Francisco"
      state="California"
      country="United States"
      description="San Francisco, located on a hilly California peninsula, is
a dense, culturally diverse, and innovative city renowned for its iconic Golden Gate Bridge,, historic cable cars, and Victorian architecture. It is a major financial and tech hub, blending a scenic waterfront, unpredictable foggy weather, and distinct, vibrant neighborhoods."
      image={{
        src: "/images/locations/SanFranciscoSkyline.jpg",
        alt: "San Francisco",
        title: "San Francisco",
      }}
      variant="default"
    />
  ),
};

export const Compact: Story = {
  render: () => (
    <CityCard
      city="San Francisco"
      state="California"
      country="United States"
      description="San Francisco, located on a hilly California peninsula, is
a dense, culturally diverse, and innovative city renowned for its iconic Golden Gate Bridge,, historic cable cars, and Victorian architecture. It is a major financial and tech hub, blending a scenic waterfront, unpredictable foggy weather, and distinct, vibrant neighborhoods."
      image={{
        src: "/images/locations/SanFranciscoSkyline.jpg",
        alt: "San Francisco",
        title: "San Francisco",
      }}
      variant="compact"
    />
  ),
};
