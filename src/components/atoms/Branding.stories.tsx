import type { Meta, StoryObj } from "@storybook/react-vite";
import { Branding } from "./Branding";
import { SunIcon } from "lucide-react";

const meta: Meta<typeof Branding> = {
  title: "Atoms/Branding",
  component: Branding,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Branding>;

export const Default: Story = {
  render: () => (
    <Branding
      logo={<SunIcon className="w-10 h-10 md:w-10 md:h-10 text-cyan-400" />}
      title="WEATHER"
      subtitle="AI"
    />
  ),
};
