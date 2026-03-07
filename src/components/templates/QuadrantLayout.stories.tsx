import type { Meta, StoryObj } from "@storybook/react-vite";
import { AILayout } from "@/components/templates/AILayout";
import { QuadrantLayout } from "./QuadrantLayout";
import { Map } from "@/components/molecules/maps/Map";
import { Attractions } from "@/components/molecules/Attractions";
import { oahuAttractions } from "@/data/oahu/attractions";
import { MOCK_THREE_HOUR_FORECAST } from "@/data/mockThreeHourForecast";
import { ThreeHourForecastCard } from "../molecules/cards/weather/ThreeHourForecastCard";

const meta: Meta<typeof AILayout> = {
  title: "Templates/QuadrantLayout",
  component: AILayout,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof AILayout>;

export const Default: Story = {
  render: () => (
    <QuadrantLayout
      topLeft={<div>Top Left</div>}
      topRight={<div>Top Right</div>}
      bottomLeft={<div>Bottom Left</div>}
      bottomRight={<div>Bottom Right</div>}
    />
  ),
};

export const MapTopLeft: Story = {
  render: () => (
    <QuadrantLayout
      topLeft={
        <Map variant="default" latitude={20.77} longitude={-156.33} zoom={10} />
      }
      topRight={<div className="bg-pink-500 w-full h-full" />}
      bottomLeft={<div className="bg-purple-500 w-full h-full" />}
      bottomRight={<div className="bg-orange-500 w-full h-full" />}
    />
  ),
};

export const MapTopRight: Story = {
  render: () => (
    <QuadrantLayout
      topLeft={<div className="bg-purple-500 w-full h-full" />}
      topRight={
        <Map variant="default" latitude={20.77} longitude={-156.33} zoom={10} />
      }
      bottomLeft={<div className="bg-pink-500 w-full h-full" />}
      bottomRight={<div className="bg-orange-500 w-full h-full" />}
    />
  ),
};

export const DestinationTopLeftMapTopRight: Story = {
  render: () => (
    <QuadrantLayout
      topLeft={<Attractions attractions={oahuAttractions} display="carousel" />}
      topRight={
        <Map variant="default" latitude={20.77} longitude={-156.33} zoom={10} />
      }
      bottomLeft={<div className="bg-pink-500 w-full h-full" />}
      bottomRight={<div className="bg-orange-500 w-full h-full" />}
    />
  ),
};

export const DestinationTopLeftMapTopRightWeatherBottomRight: Story = {
  render: () => (
    <QuadrantLayout
      topLeft={<Attractions attractions={oahuAttractions} display="carousel" />}
      topRight={
        <Map variant="default" latitude={20.77} longitude={-156.33} zoom={10} />
      }
      bottomLeft={<div className="bg-pink-500 w-full h-full" />}
      bottomRight={
        <ThreeHourForecastCard
          title="Kaʻaʻawa, Hawaii"
          description="-157.8597, 21.5475"
          hourForecasts={MOCK_THREE_HOUR_FORECAST}
        />
      }
    />
  ),
};

export const MapBottomRight: Story = {
  render: () => (
    <QuadrantLayout
      topLeft={<div className="bg-purple-500 w-full h-full" />}
      topRight={<div className="bg-pink-500 w-full h-full" />}
      bottomLeft={<div className="bg-orange-500 w-full h-full" />}
      bottomRight={
        <Map variant="default" latitude={20.77} longitude={-156.33} zoom={10} />
      }
    />
  ),
};

export const MapBottomLeft: Story = {
  render: () => (
    <QuadrantLayout
      topLeft={<div className="bg-purple-500 w-full h-full" />}
      topRight={<div className="bg-pink-500 w-full h-full" />}
      bottomLeft={
        <Map variant="default" latitude={20.77} longitude={-156.33} zoom={10} />
      }
      bottomRight={<div className="bg-orange-500 w-full h-full" />}
    />
  ),
};
