import type { Meta, StoryObj } from "@storybook/react-vite";
import { WeatherCard } from "@/components/molecules/cards/weather/WeatherCard";
import { CloudSun } from "lucide-react";

const meta: Meta<typeof WeatherCard> = {
  title: "Molecules/Cards/Weather/WeatherCard",
  component: WeatherCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof WeatherCard>;

export const Default: Story = {
  render: () => (
    <WeatherCard
      title="Leyden, Arvada, Colorado Weather"
      apparentTemperature="Feels Like 47° · Day 66° · Night 46°"
      temperature={52}
      conditions="Partly Cloudy"
      outlook="Expect scattered showers and thunderstorms"
      variant="default"
      status="success"
      weatherIcon={<CloudSun className="h-14 w-14 text-white" />}
      weatherImage={{
        // src: 'https://s.w-x.co/WeatherImages_Web/WeatherImage_PartlyCloudy-day_3.jpg?format=pjpg&optimize=medium&width=800&crop=16%3A9&auto=webp&quality=70',
        src: "/images/weather/partly-cloudy-day.jpg",
        alt: "Partly Cloudy Day",
        title: "Partly Cloudy Day",
      }}
    />
  ),
};
