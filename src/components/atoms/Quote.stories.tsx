import type { Meta, StoryObj } from "@storybook/react-vite";
import { Quote } from "./Quote";

const meta: Meta<typeof Quote> = {
  title: "Atoms/Quote",
  component: Quote,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Quote>;

export const Default: Story = {
  render: () => (
    <Quote
      quote="The best way to predict the future is to invent it."
      author="Alan Kay"
    />
  ),
};

export const Aside: Story = {
  render: () => (
    <Quote
      quote="Be the Aloha you wish to see in the world."
      author="Anonymous"
      variant="aside"
    />
  ),
};
