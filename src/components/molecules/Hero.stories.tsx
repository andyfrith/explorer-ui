import type { Meta, StoryObj } from "@storybook/react-vite";
import { Branding } from "@/components/atoms/Branding";
import { Hero } from "@/components/molecules/Hero";
import { SunIcon } from "lucide-react";

const meta: Meta<typeof Hero> = {
  title: "Molecules/Hero",
  component: Hero,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  render: () => (
    <Hero
      cta={
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://tanstack.com/start"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-cyan-500/50"
          >
            Documentation
          </a>
        </div>
      }
      logo={
        <Branding
          logo={<SunIcon className="w-10 h-10 md:w-10 md:h-10 text-cyan-400" />}
          title="WEATHER"
          subtitle="AI"
        />
      }
      headline="A demo application of next generation AI and weather data"
      subheadline="Built using TanStack Start, TanStack Router, and TanStack Query.
            Fueled by data from the OpenWeatherMap API. Touched by Google Gemini
            AI."
    />
  ),
};
