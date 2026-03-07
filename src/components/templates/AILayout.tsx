import { cva } from "class-variance-authority";
import { Header } from "@/components/organisms/Header";

interface AItLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  variant?: "default" | "compact" | "detailed";
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const aiLayoutVariants = cva("transition-all duration-200 w-screen h-screen", {
  variants: {
    variant: {
      default: "p-6",
      compact: "p-4",
      detailed: "p-6 space-y-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function AILayout({
  children,
  variant = "default",
  left,
  right,
  ...props
}: AItLayoutProps) {
  return (
    <div {...props} className={aiLayoutVariants({ variant })}>
      {children}
      <Header />
      <div className="w-full h-full min-h-0">
        <div className="grid grid-cols-2 grid-rows-1 w-full h-full min-h-0 gap-2 pt-2">
          <div className="col-span-1 row-span-1 min-w-0 min-h-0 overflow-hidden size-full">
            {left}
          </div>
          <div className="col-span-1 row-span-1 min-w-0 min-h-0 overflow-hidden size-full">
            {right}
          </div>
        </div>
      </div>
    </div>
  );
}

AILayout.displayName = "AILayout";
export { AILayout, aiLayoutVariants };
