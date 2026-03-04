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
        "/public/images/locations/HonoluluBeach.jpg",
        "/public/images/locations/Alaska.jpeg",
        "/public/images/locations/Paris.webp",
        "/public/images/locations/SanFranciscoSkyline.jpg",
        "/public/images/locations/qiddiya-performing-arts-centre.webp",
        "/public/images/locations/NewYorkStatueofLiberty.avif",
      ]}
      variant="default"
    />
  ),
};
