import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { Text } from "./Text";

interface QuoteProps extends React.HTMLAttributes<HTMLDivElement> {
  quote: string;
  author: string;
  variant?: "default" | "aside";
}

const quoteVariants = cva("transition-all duration-200", {
  variants: {
    variant: {
      default: "p-2 mt-6 italic w-full",
      aside: "p-2 mt-0 italic w-64 p-0",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Quote({
  quote,
  author,
  variant = "default",
  ...props
}: React.HTMLAttributes<HTMLQuoteElement> & QuoteProps) {
  return (
    <blockquote
      {...props}
      className={cn(quoteVariants({ variant }), props.className)}
    >
      {/* <span className="quotation-mark">&quot;</span> */}
      <Text variant="p" className="quote">
        <span className="quotation-mark">&quot;</span>
        {quote}&quot;
        <div className="author pt-2">-&nbsp;{author}</div>
      </Text>
    </blockquote>
  );
}

Quote.displayName = "QuoteComponent";
export { Quote, quoteVariants };
