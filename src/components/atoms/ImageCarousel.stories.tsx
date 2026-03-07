import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageCarousel } from "@/components/atoms/ImageCarousel";

const meta: Meta<typeof ImageCarousel> = {
  title: "Atoms/ImageCarousel",
  component: ImageCarousel,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ImageCarousel>;

export const Default: Story = {
  render: () => (
    <ImageCarousel
      images={[
        "/images/locations/HonoluluBeach.jpg",
        "/images/locations/Alaska.jpeg",
        "/images/locations/Paris.webp",
        "/images/locations/SanFranciscoSkyline.jpg",
        "/images/locations/qiddiya-performing-arts-centre.webp",
        "/images/locations/NewYorkStatueofLiberty.avif",
      ]}
      variant="default"
    />
  ),
};
