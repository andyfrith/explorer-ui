import { cva } from "class-variance-authority";
import { Header } from "../organisms/Header";

interface QuadrantLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  variant?: "default" | "compact" | "detailed";
  topLeft?: React.ReactNode;
  topRight?: React.ReactNode;
  bottomLeft?: React.ReactNode;
  bottomRight?: React.ReactNode;
}

const quadrantLayoutVariants = cva(
  "transition-all duration-200 w-screen h-screen",
  {
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
  },
);

function QuadrantLayout({
  children,
  variant = "default",
  topLeft,
  topRight,
  bottomLeft,
  bottomRight,
  ...props
}: QuadrantLayoutProps) {
  return (
    <div {...props} className={quadrantLayoutVariants({ variant })}>
      {children}
      <Header />
      <div className="w-full h-full min-h-0">
        <div className="grid grid-cols-2 grid-rows-2 w-full h-full min-h-0 gap-2 pt-2">
          <div className="col-span-1 row-span-1 min-w-0 min-h-0 overflow-hidden size-full">
            {topLeft}
          </div>
          <div className="col-span-1 row-span-1 min-w-0 min-h-0 overflow-hidden size-full">
            {topRight}
          </div>
          <div className="col-span-1 row-span-1 min-w-0 min-h-0 overflow-hidden size-full">
            {bottomLeft}
          </div>
          <div className="col-span-1 row-span-1 min-w-0 min-h-0 overflow-hidden size-full">
            {bottomRight}
          </div>
        </div>
      </div>
    </div>
  );
}

QuadrantLayout.displayName = "QuadrantLayout";
export { QuadrantLayout, quadrantLayoutVariants };
