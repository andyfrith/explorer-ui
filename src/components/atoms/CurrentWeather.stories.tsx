import type { Meta, StoryObj } from "@storybook/react-vite";
import { CurrentWeather } from "./CurrentWeather";
import { SunIcon } from "lucide-react";

const meta: Meta<typeof CurrentWeather> = {
  title: "Atoms/CurrentWeather",
  component: CurrentWeather,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CurrentWeather>;

export const Default: Story = {
  render: () => (
    <CurrentWeather
      icon={<SunIcon className="w-10 h-10 md:w-10 md:h-10 text-cyan-400" />}
      title="Sunny"
      temperature={52}
      conditions="Partly Cloudy"
      apparentTemperature="Feels Like 47° · Day 66° · Night 46°"
      variant="default"
      status="success"
      image={{
        src: "/images/weather/partly-cloudy-day.jpg",
        alt: "Partly Cloudy Day",
        title: "Partly Cloudy Day",
      }}
    />
  ),
};
