export const pearlHarborMemorialMarkdown = `# The USS Arizona Memorial at Pearl Harbor

The **USS Arizona Memorial**, located at **Pearl Harbor** in Honolulu, Hawai‘i, marks the resting place of 1,102 of the 1,177 sailors and Marines killed on the USS *Arizona* during the attack on December 7, 1941.

## Key Features
* **The Shrine Room:** A marble wall engraved with the names of those who perished on the ship.
* **The Assembly Room:** A central gathering area for reflection that offers a view of the sunken hull below.
* **The "Black Tears":** Droplets of oil that still leak from the sunken battleship today.

### Visitor Information

| Feature | Description |
| :--- | :--- |
| **Location** | Ford Island, Pearl Harbor |
| **Access** | Via US Navy shuttle boat |
| **Managed By** | National Park Service |
`;

export const userRequestForPearlHarborMemorialInfo = `# Inquiry: Planning My Pearl Harbor Visit

Hi everyone! I’m heading to Oahu soon and want to make sure I don't miss anything at Pearl Harbor. Since it's such a popular spot, I have a few questions:

## Logistics & Planning
* **USS Arizona Tickets:** I know they are free but limited. What's the best strategy for booking via [Recreation.gov](https://www.recreation.gov/)?
* **Bag Policy:** I read that no bags are allowed. Is there a place to store a small camera case or purse at the Visitor Center?
* **Transportation:** Is the public bus from Waikiki reliable, or should I just stick with a ride-share like Uber or [Lyft](https://www.lyft.com)?

## Top Interests
1. **The Battleship Missouri:** How much time should I budget for the "Mighty Mo" tour?
2. **Aviation Museum:** I’m a big fan of vintage planes—is the [Pearl Harbor Aviation Museum](https://www.pearlharboraviationmuseum.org) worth the extra shuttle ride?
3. **The "Black Tears":** I’ve heard you can still see oil leaking from the Arizona. Is it visible from the memorial platform?

Any advice from someone who has visited recently would be awesome!

---
**Planned Date:** November 12th
**Party Size:** 2 Adults`;

interface SuggestedAction {
  label: string;
  prompt: string;
}

export const SUGGESTED_ACTIONS: SuggestedAction[] = [
  {
    label: "How do I book tickets for the USS Arizona?",
    prompt: "How do I book tickets for the USS Arizona?",
  },
  {
    label: "What is the bag policy for the USS Arizona?",
    prompt: "What is the bag policy for the USS Arizona?",
  },
  {
    label:
      "Is the public bus from Waikiki reliable, or should I just stick with a ride-share like Uber or [Lyft](https://www.lyft.com)?",
    prompt:
      "Is the public bus from Waikiki reliable, or should I just stick with a ride-share like Uber or [Lyft](https://www.lyft.com)?",
  },
];
