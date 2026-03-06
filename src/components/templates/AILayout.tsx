import { cva } from "class-variance-authority";
import { Header } from "../organisms/Header";

interface AILayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const aiLayoutVariants = cva("transition-all duration-200", {
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

function AILayout({ children, ...props }: AILayoutProps) {
  return (
    <div {...props} className={"w-screen h-screen"}>
      {children}
      <Header />
      <div>HELLO</div>
    </div>
  );
}

AILayout.displayName = "AILayout";
export { AILayout, aiLayoutVariants };
