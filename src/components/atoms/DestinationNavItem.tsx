import { cn } from "@/lib/utils";

export interface DestinationNavItemProps {
  /** Thumbnail image URL, displayed to the left of the title */
  thumbnail: string;
  /** Alt text for the thumbnail */
  thumbnailAlt?: string;
  /** Destination title */
  title: string;
  className?: string;
}

/**
 * Displays a destination with a thumbnail on the left and title on the right.
 * Intended for use inside NavigationMenuLink or other clickable wrappers.
 */
function DestinationNavItem({
  thumbnail,
  thumbnailAlt,
  title,
  className,
}: DestinationNavItemProps) {
  return (
    <span
      className={cn(
        "flex min-w-0 items-center gap-3 rounded-sm py-1.5 pr-2",
        className
      )}
    >
      <img
        src={thumbnail}
        alt={thumbnailAlt ?? title}
        className="size-9 shrink-0 rounded-md object-cover"
      />
      <span className="min-w-0 truncate text-sm font-medium">{title}</span>
    </span>
  );
}

DestinationNavItem.displayName = "DestinationNavItem";

export { DestinationNavItem };
