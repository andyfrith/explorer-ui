import { cva } from "class-variance-authority";
import { Text } from "@/components/atoms/Text";

interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: React.ReactNode;
  headline: string;
  subheadline: string;
  cta?: React.ReactNode;
  children?: React.ReactNode;
}

const heroVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "p-2",
      compact: "p-2",
      detailed: "p-2 space-y-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Hero({
  cta,
  logo,
  headline,
  subheadline,
  children,
  ...props
}: HeroProps) {
  return (
    <section className="relative py-20 px-6 text-center overflow-hidden">
      <div className="absolute inset-0"></div>
      <div className="relative max-w-5xl mx-auto">
        <div className="flex items-center justify-center gap-6 mb-6">
          {logo}
        </div>
        <Text variant="h2">{headline}</Text>
        <Text variant="large">{subheadline}</Text>
        <br />
        <br />
        <br />
        {/* <p className="text-2xl md:text-3xl dark:text-gray-300 mb-4 font-light">
          {headline}
        </p>
        <p className="text-lg dark:text-gray-400 max-w-3xl mx-auto mb-8">
          {subheadline}
        </p> */}
        {cta}
      </div>
    </section>
  );
}

Hero.displayName = "Hero";
export { Hero, heroVariants };
