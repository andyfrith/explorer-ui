import type { Meta, StoryObj } from "@storybook/react-vite";
import { ForecastMapPage } from "@/components/pages/ForecastMapPage";

const meta: Meta<typeof ForecastMapPage> = {
  title: "Pages/ForecastMapPage",
  component: ForecastMapPage,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ForecastMapPage>;

export const Default: Story = {
  render: () => <ForecastMapPage />,
};
