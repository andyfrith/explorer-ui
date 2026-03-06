import type { Meta, StoryObj } from "@storybook/react-vite";
import { Navigation } from "@/components/molecules/Navigation";

const meta: Meta<typeof Navigation> = {
  title: "Molecules/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  argTypes: {
    align: {
      control: "select",
      options: ["start", "center", "end"],
      description: "Alignment of the dropdown positioner",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Navigation>;

export const Default: Story = {
  render: (args) => <Navigation {...args} />,
};
