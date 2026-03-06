import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/atoms/navigation-menu";
import { DestinationNavItem } from "@/components/atoms/DestinationNavItem";
import { destinations } from "@/data/destinations";
import { oahuAttractions } from "@/data/oahu/attractions";
import type { Attraction, Destination } from "@/lib/types";
import { cn } from "@/lib/utils";

export type NavigationProps = React.ComponentPropsWithRef<
  typeof NavigationMenu
> & {
  children?: React.ReactNode;
};

/**
 * Navigation molecule – wraps the navigation-menu atom. Renders default content
 * (Destinations, Attractions, About) when no children are passed; otherwise
 * renders the provided children.
 */
function Navigation({ children, ...props }: NavigationProps) {
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const [selectedAttraction, setSelectedAttraction] =
    useState<Attraction | null>(null);

  const defaultContent = (
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>
          {selectedDestination ? (
            <DestinationNavItem
              thumbnail={
                selectedDestination.media[0]?.thumbnailImage ??
                selectedDestination.media[0]?.image ??
                ""
              }
              thumbnailAlt={
                selectedDestination.media[0]?.altText ??
                selectedDestination.name
              }
              title={selectedDestination.name}
            />
          ) : (
            "Select a Destination"
          )}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-0.5 p-2 w-[240px]">
            {destinations.map((destination) => (
              <li key={destination.name}>
                <NavigationMenuLink
                  href={`/destinations/${destination.name.toLowerCase().replace(/\s+/g, "-")}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedDestination(destination);
                  }}
                >
                  <DestinationNavItem
                    thumbnail={
                      destination.media[0]?.thumbnailImage ??
                      destination.media[0]?.image ??
                      ""
                    }
                    thumbnailAlt={
                      destination.media[0]?.altText ?? destination.name
                    }
                    title={destination.name}
                  />
                </NavigationMenuLink>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger>
          {selectedAttraction ? (
            <DestinationNavItem
              thumbnail={
                selectedAttraction.media[0]?.thumbnailImage ??
                selectedAttraction.media[0]?.image ??
                ""
              }
              thumbnailAlt={
                selectedAttraction.media[0]?.altText ?? selectedAttraction.name
              }
              title={selectedAttraction.name}
            />
          ) : (
            "Attractions"
          )}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-0.5 p-2 w-[320px] max-h-[min(60vh,400px)] overflow-y-auto">
            {oahuAttractions.map((attraction) => (
              <li key={attraction.id}>
                <button
                  type="button"
                  onClick={() => setSelectedAttraction(attraction)}
                  className={cn(
                    "flex w-full cursor-pointer items-center rounded-sm p-2 text-left text-sm outline-none",
                    "hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1",
                  )}
                >
                  <DestinationNavItem
                    thumbnail={
                      attraction.media[0]?.thumbnailImage ??
                      attraction.media[0]?.image ??
                      ""
                    }
                    thumbnailAlt={
                      attraction.media[0]?.altText ?? attraction.name
                    }
                    title={attraction.name}
                  />
                </button>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  );

  return (
    <NavigationMenu {...props}>{children ?? defaultContent}</NavigationMenu>
  );
}

Navigation.displayName = "Navigation";

export {
  Navigation,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
};
