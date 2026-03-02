import { cva } from "class-variance-authority";

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
    status: {
      success:
        "border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/50",
      warning:
        "border-yellow-200 bg-yellow-50/50 dark:border-yellow-800 dark:bg-yellow-950/50",
      error:
        "border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/50",
      info: "border-blue-200 bg-blue-50/50 dark:border-blue-800 dark:bg-blue-950/50",
      neutral: "",
    },
  },
  defaultVariants: {
    variant: "default",
    status: "neutral",
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
        {/* <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {" "}
          {headline}
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">{subheadline}</p>
         */}
        <p className="text-2xl md:text-3xl dark:text-gray-300 mb-4 font-light">
          {headline}
        </p>
        <p className="text-lg dark:text-gray-400 max-w-3xl mx-auto mb-8">
          {subheadline}
        </p>
        {cta}
      </div>
    </section>
  );
}

Hero.displayName = "Hero";
export { Hero, heroVariants };
