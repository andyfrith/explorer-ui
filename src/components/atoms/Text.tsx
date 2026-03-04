import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 pb-2 text-3xl font-light tracking-tight",
      h3: "scroll-m-20 text-2xl font-light tracking-tight",
      h4: "scroll-m-20 text-xl tracking-tight font-light",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-light",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type VariantPropType = VariantProps<typeof textVariants>;

const variantElementMap: Record<
  NonNullable<VariantPropType["variant"]>,
  string
> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p: "p",
  lead: "p",
  large: "div",
  small: "small",
  muted: "p",
};

type TextElement = "h1" | "h2" | "h3" | "h4" | "p" | "small" | "div";

export type TextProps = useRender.ComponentProps<"div"> &
  VariantProps<typeof textVariants> & {
    /** Override the default element type. For custom components, use the `render` prop. */
    as?: TextElement;
  };

/**
 * Polymorphic text component with semantic variants. Use the `render` prop to
 * render as a custom element or component (base-ui composition pattern).
 */
function Text({ className, variant = "p", as, render, ...props }: TextProps) {
  const defaultTagName = (as ??
    (variant ? variantElementMap[variant] : undefined) ??
    "div") as "h1" | "h2" | "h3" | "h4" | "p" | "small" | "div";

  return useRender({
    defaultTagName,
    props: mergeProps<typeof defaultTagName>(
      {
        className: cn(textVariants({ variant }), className),
      },
      props,
    ),
    render,
    state: { variant },
  });
}

Text.displayName = "Text";

export { Text, textVariants };
