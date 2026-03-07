import { type Destination } from "@/lib/types";
import { MediaType } from "@/lib/types";
import { oahuAttractions } from "@/data/oahu/attractions";

export const destinations: Array<Destination> = [
  {
    name: "Honolulu",
    description:
      "Honolulu is the capital and most populous city of the United States state of Hawaii. The city is the county seat of Honolulu County and the seat of the State of Hawaii.",
    media: [
      {
        image: "/images/locations/HonoluluBeach.jpg",
        thumbnailImage: "/images/locations/HonoluluBeach.jpg",
        type: MediaType.IMAGE,
        altText: "Honolulu",
        title: "Honolulu",
      },
    ],
    latitude: 21.3069,
    longitude: -157.8583,
    attractions: oahuAttractions,
  },
  {
    name: "Alaska",
    description:
      "Alaska is the largest state in the United States by area. It is known for its rugged terrain, snow-covered mountains, and the Northern Lights.",
    media: [
      {
        image: "/images/locations/Alaska.jpeg",
        thumbnailImage: "/images/locations/Alaska.jpeg",
        type: MediaType.IMAGE,
        altText: "Alaska",
        title: "Alaska",
      },
    ],
    latitude: 61.3707,
    longitude: -151.0064,
    attractions: [],
  },
  {
    name: "Paris",
    description:
      "Paris is the capital and most populous city of France. The city is known for its iconic Eiffel Tower, Louvre Museum, and Notre-Dame Cathedral.",
    media: [
      {
        image: "/images/locations/Paris.webp",
        thumbnailImage: "/images/locations/Paris.webp",
        type: MediaType.IMAGE,
        altText: "Paris",
        title: "Paris",
      },
    ],
    latitude: 48.8566,
    longitude: 2.3522,
    attractions: [],
  },
  {
    name: "Tokyo",
    description:
      "Tokyo is the capital and most populous city of Japan. The city is known for its iconic Tokyo Tower, Tokyo Skytree, and Shibuya Crossing.",
    media: [
      {
        image: "/images/locations/Tokyo.jpg",
        thumbnailImage: "/images/locations/Tokyo.jpg",
        type: MediaType.IMAGE,
        altText: "Tokyo",
        title: "Tokyo",
      },
    ],
    latitude: 35.6895,
    longitude: 139.6917,
    attractions: [],
  },
  {
    name: "New York City",
    description:
      "New York is the most populous city in the United States. The city is known for its iconic New York City, New York Skyline, and Statue of Liberty.",
    media: [
      {
        image: "/images/locations/NewYork.webp",
        thumbnailImage: "/images/locations/NewYork.webp",
        type: MediaType.IMAGE,
        altText: "New York City",
        title: "New York City",
      },
    ],
    latitude: 40.7128,
    longitude: -74.006,
    attractions: [],
  },
  {
    name: "Qiddiya",
    description:
      "Qiddiya is a city in Saudi Arabia. The city is known for its iconic Qiddiya, Qiddiya Tower, and Qiddiya Park.",
    media: [
      {
        image: "/images/locations/qiddiya-performing-arts-centre.webp",
        thumbnailImage: "/images/locations/qiddiya-performing-arts-centre.webp",
        type: MediaType.IMAGE,
        altText: "Qiddiya Performing Arts",
        title: "Qiddiya Performing Arts",
      },
    ],
    latitude: 24.5236,
    longitude: 46.733,
    attractions: [],
  },
];
