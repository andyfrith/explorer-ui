import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "@/components/atoms/Text";

const meta = {
  title: "Atoms/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "p",
        "lead",
        "large",
        "small",
        "muted",
      ],
    },
    as: {
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "p", "small", "div"],
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "p",
    children: "The quick brown fox jumps over the lazy dog.",
  },
};

export const Heading1: Story = {
  args: {
    variant: "h1",
    children: "Heading 1",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    children: "Heading 2",
  },
};

export const Heading3: Story = {
  args: {
    variant: "h3",
    children: "Heading 3",
  },
};

export const Heading4: Story = {
  args: {
    variant: "h4",
    children: "Heading 4",
  },
};

export const Lead: Story = {
  args: {
    variant: "lead",
    children:
      "Lead paragraph with larger, muted text for introductions or summaries.",
  },
};

export const Large: Story = {
  args: {
    variant: "large",
    children: "Large semibold text",
  },
};

export const Small: Story = {
  args: {
    variant: "small",
    children: "Small label or caption",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    children: "Muted secondary or helper text",
  },
};

export const AsSpan: Story = {
  args: {
    variant: "large",
    as: "div",
    children: "Rendered as div via the as prop (variant styles still apply)",
  },
};

export const WithRenderProp: Story = {
  render: () => (
    <Text
      variant="large"
      render={<a href="#test">Link rendered via render prop</a>}
    />
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-xl">
      <Text variant="h1">Heading 1</Text>
      <Text variant="h2">Heading 2</Text>
      <Text variant="h3">Heading 3</Text>
      <Text variant="h4">Heading 4</Text>
      <Text variant="p">Body paragraph with default leading and spacing.</Text>
      <Text variant="lead">Lead paragraph for intros or summaries.</Text>
      <Text variant="large">Large semibold text</Text>
      <Text variant="small">Small label</Text>
      <Text variant="muted">Muted helper text</Text>
    </div>
  ),
};
