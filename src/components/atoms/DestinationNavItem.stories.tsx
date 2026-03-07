import type { Meta, StoryObj } from "@storybook/react-vite";
import { DestinationNavItem } from "@/components/atoms/DestinationNavItem";
import { destinations } from "@/data/destinations";

const meta: Meta<typeof DestinationNavItem> = {
  title: "Atoms/DestinationNavItem",
  component: DestinationNavItem,
  tags: ["autodocs"],
  argTypes: {
    thumbnail: {
      control: "text",
      description: "Thumbnail image URL",
    },
    thumbnailAlt: {
      control: "text",
      description: "Alt text for the thumbnail",
    },
    title: {
      control: "text",
      description: "Destination title",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof DestinationNavItem>;

export const Default: Story = {
  args: {
    thumbnail: "/images/locations/HonoluluBeach.jpg",
    thumbnailAlt: "Honolulu",
    title: "Honolulu",
  },
};

export const WithLongTitle: Story = {
  args: {
    thumbnail: "/images/locations/Paris.webp",
    thumbnailAlt: "Paris",
    title: "Paris – Capital and most populous city of France",
  },
};

export const FromDestinationsData: Story = {
  render: () => (
    <ul className="flex flex-col gap-1 w-[240px]">
      {destinations.slice(0, 3).map((destination) => (
        <li key={destination.name}>
          <DestinationNavItem
            thumbnail={
              destination.media[0]?.thumbnailImage ??
              destination.media[0]?.image ??
              ""
            }
            thumbnailAlt={destination.media[0]?.altText ?? destination.name}
            title={destination.name}
          />
        </li>
      ))}
    </ul>
  ),
};
