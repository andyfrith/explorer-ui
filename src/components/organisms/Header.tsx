import { cva } from "class-variance-authority";
import { Branding } from "../atoms/Branding";
import { SunIcon } from "lucide-react";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const headerVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "p-6",
      compact: "p-4",
      detailed: "p-6 space-y-4",
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

function Header({ children, ...props }: HeaderProps) {
  return (
    <div {...props}>
      <header className="p-2 flex items-center dark:bg-gray-800 text-white dark:shadow-lg">
        <Branding
          logo={<SunIcon className="w-10 h-10 md:w-10 md:h-10 text-cyan-400" />}
          title="EXPLORER"
          subtitle="UI"
        />
        {children}
      </header>
    </div>
  );
}

Header.displayName = "Header";
export { Header, headerVariants };
