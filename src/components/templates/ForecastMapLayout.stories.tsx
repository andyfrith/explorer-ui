import type { Meta, StoryObj } from "@storybook/react-vite";
import { ForecastMapLayout } from "@/components/templates/ForecastMapLayout";

const meta: Meta<typeof ForecastMapLayout> = {
  title: "Templates/ForecastMapLayout",
  component: ForecastMapLayout,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ForecastMapLayout>;

export const Default: Story = {
  render: () => (
    <ForecastMapLayout>
      <div>
        <h1>Forecast Map Layout</h1>
      </div>
    </ForecastMapLayout>
  ),
};
