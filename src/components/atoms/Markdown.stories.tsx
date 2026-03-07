import type { Meta, StoryObj } from "@storybook/react-vite";
import { Markdown } from "@/components/atoms/Markdown";

const meta = {
  title: "Atoms/Markdown",
  component: Markdown,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Markdown string to render",
    },
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Markdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Paragraph: Story = {
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
};

export const Headings: Story = {
  args: {
    children: `# Heading 1
## Heading 2
### Heading 3
#### Heading 4

A paragraph after headings.`,
  },
};

export const BoldAndLink: Story = {
  args: {
    children:
      "This is **bold text** and a [link to example.com](https://example.com).",
  },
};

export const UnorderedList: Story = {
  args: {
    children: `- First item
- Second item
- Third item`,
  },
};

export const OrderedList: Story = {
  args: {
    children: `1. First step
2. Second step
3. Third step`,
  },
};

export const InlineCode: Story = {
  args: {
    children: "Use the `useState` hook for local state.",
  },
};

export const CodeBlock: Story = {
  args: {
    children: "```ts\nconst greeting = \"Hello, world!\";\nconsole.log(greeting);\n```",
  },
};

export const MixedContent: Story = {
  args: {
    children: `## Section

A paragraph with **bold** and \`code\`.

- List item one
- List item two

[Learn more](https://example.com)`,
  },
};
