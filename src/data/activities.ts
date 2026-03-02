import { Activity } from "@/lib/types";

const activities: Array<Activity> = [
  {
    id: 1,
    name: "Snorkeling",
    image: "/example-ukelele-tanstack.jpg",
    description:
      'Explore Molokini Crater and "Turtle Town" to see marine life.',
    shortDescription:
      'Explore Molokini Crater and "Turtle Town" to see marine life.',
    price: 299,
    city: "Molokini",
    state: "Hawaii",
    latitude: 20.6313,
    longitude: -156.4967,
  },
  {
    id: 2,
    name: "Surfing",
    image: "/example-guitar-video-games.jpg",
    description: "Take lessons in Kalama Park or Ka'anapali.",
    shortDescription: "Take lessons in Kalama Park or Ka'anapali.",
    price: 699,
    city: " Ka'anapali",
    state: "Hawaii",
    latitude: 20.9347,
    longitude: -156.6794,
  },
  {
    id: 3,
    name: "Hiking",
    image: "/example-guitar-video-games.jpg",
    description: "Explore the Kapalua Coastal Trail or trails in Haleakala.",
    shortDescription:
      "Explore the Kapalua Coastal Trail or trails in Haleakala.",
    price: 199,
    city: "Haleakala",
    state: "Hawaii",
    latitude: 20.718,
    longitude: -156.25,
  },
  {
    id: 4,
    name: "Plantation Tour",
    image: "/example-guitar-video-games.jpg",
    description:
      "Take a tram tour through agricultural fields of the Maui Tropical Plantation.",
    shortDescription:
      "Take a tram tour through agricultural fields of the Maui Tropical Plantation.",
    price: 199,
    city: "Wailuku",
    state: "Hawaii",
    latitude: 20.8919,
    longitude: -156.5022,
  },
];

export default activities;
