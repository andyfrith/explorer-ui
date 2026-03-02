import { cva } from "class-variance-authority";
import { Link } from "@tanstack/react-router";

interface BrandingProps extends React.HTMLAttributes<HTMLDivElement> {
  logo: React.ReactNode;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const brandingVariants = cva("transition-all duration-200", {
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

function Branding({
  logo,
  title,
  subtitle,
  children,
  ...props
}: BrandingProps) {
  return (
    <div {...props}>
      <header className="p-2 flex items-center text-white">
        <div className="flex flex-row justify-center items-center gap-2 ml-0 text-xl font-semibold">
          <Link
            to="/"
            className="flex flex-row justify-center items-center gap-2"
          >
            {logo}

            <span className="dark:text-gray-300 text-3xl md:text-3xl font-black text-gray-500 tracking-[-0.02em]">
              {title}
            </span>
            <span className="text-gray-300 text-3xl md:text-3xl font-black tracking-[-0.02em] bg-linear-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {subtitle}
            </span>
          </Link>
        </div>
      </header>
      {children}
    </div>
  );
}

Branding.displayName = "Branding";
export { Branding, brandingVariants };
