import type { Meta, StoryObj } from "@storybook/react-vite";
import { CloudSun } from "lucide-react";
import { HourForecastTable } from "@/components/molecules/tables/weather/HourForecastTable";

const meta: Meta<typeof HourForecastTable> = {
  title: "Molecules/Tables/Weather/HourForecastTable",
  component: HourForecastTable,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof HourForecastTable>;

export const Default: Story = {
  render: () => (
    <HourForecastTable
      hourForecasts={[
        {
          dt: 1714339200,
          tempMin: 52,
          tempMax: 58,
          icon: <CloudSun className="h-8 w-8" />,
          iconId: "04d",
          humidity: 50,
        },
        {
          dt: 1714342800,
          tempMin: 50,
          tempMax: 56,
          icon: <CloudSun className="h-8 w-8" />,
          iconId: "04d",
          humidity: 50,
        },
      ]}
      variant="default"
    />
  ),
};
