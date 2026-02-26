import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThreeHourForecastCard } from "@/components/molecules/cards/weather/ThreeHourForecastCard";
import { MOCK_THREE_HOUR_FORECAST } from "@/data/mockThreeHourForecast";

const meta: Meta<typeof ThreeHourForecastCard> = {
  title: "Molecules/Cards/Weather/ThreeHourForecastCard",
  component: ThreeHourForecastCard,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ThreeHourForecastCard>;

export const Default: Story = {
  render: () => (
    <ThreeHourForecastCard
      title="Kaʻaʻawa, Hawaii"
      description="-157.8597, 21.5475"
      hourForecasts={MOCK_THREE_HOUR_FORECAST}
      onDismiss={() => {
        console.log("dismiss");
      }}
    />
  ),
  args: {
    hourForecasts: MOCK_THREE_HOUR_FORECAST,
  },
};

export const Compact: Story = {
  render: () => (
    <ThreeHourForecastCard
      hourForecasts={MOCK_THREE_HOUR_FORECAST}
      variant="compact"
    />
  ),
  args: {
    hourForecasts: MOCK_THREE_HOUR_FORECAST,
    variant: "compact",
  },
};
