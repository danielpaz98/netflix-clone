// IMAGES
import BlackNightImage from "./images/black-night.jpg";
import WrongPlaceImage from "./images/wrong-place.jpg";
import TheWalkingDead from "./images/the-walking-dead.jpg";
import AQuietPlacePart2Image from "./images/a-quiet-place-part-2.jpg";
import BreakingBadImage from "./images/breaking-bad.jpg";
import NetflixLookaheadImage from "./images/netflix-lookahead.png";
import AKAImage from "./images/AKA.jpg";
import TheNurseImage from "./images/the-nurse.jpg";
import OneMoreTimeImage from "./images/one-more-time.jpg";

export const notificationMenu = [
  {
    id: 1,
    href: "#",
    title: "Coming May 12th",
    text: "Play the Trailer",
    time: "Today",
    image: BlackNightImage,
  },
  {
    id: 2,
    href: "#",
    title: "New Arrival",
    text: "Wrong Place",
    time: "1 day ago",
    image: WrongPlaceImage,
  },
  {
    id: 3,
    href: "#",
    title: "Continue Watching",
    text: "The Walking Dead",
    time: "2 days ago",
    image: TheWalkingDead,
  },
  {
    id: 4,
    href: "#",
    title: "New Arrival",
    text: "A Quiet Place Part II",
    time: "1 week ago",
    image: AQuietPlacePart2Image,
  },
  {
    id: 5,
    href: "#",
    title: "You haven't watched Breaking Bad.",
    text: "Watch now or see what else...",
    time: "1 week ago",
    image: BreakingBadImage,
  },
  {
    id: 6,
    href: "#",
    title: "Netflix Lookahead",
    text: "Explore what’s coming soon.",
    time: "1 week ago",
    image: NetflixLookaheadImage,
  },
  {
    id: 7,
    href: "#",
    title: "New Arrival",
    text: "AKA",
    time: "1 week ago",
    image: AKAImage,
  },
  {
    id: 8,
    href: "#",
    title: "New Arrival",
    text: "The Nurse",
    time: "2 weeks ago",
    image: TheNurseImage,
  },
  {
    id: 9,
    href: "#",
    title: "New Arrival",
    text: "One More Time",
    time: "2 weeks ago",
    image: OneMoreTimeImage,
  },
];

export type TNotificationMenu = typeof notificationMenu;
