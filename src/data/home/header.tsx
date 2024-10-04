import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

export const NAV_LINKS = [
  { id: 1, name: "Home", href: "#", items: [] },
  {
    id: 2,
    name: "Collection",
    href: "#",
    items: [
      { id: 1, name: "Item", href: "#" },
      { id: 2, name: "Item", href: "#" },
      { id: 3, name: "Item", href: "#" },
    ],
  },
  { id: 3, name: "Choose", href: "#", items: [] },
  { id: 4, name: "About", href: "#", items: [] },
  { id: 5, name: "Roadmap", href: "#", items: [] },
  { id: 6, name: "Blog", href: "#", items: [] },
];

export const MEDIA_ICONS = [
  { id: 1, name: "twitter", icon: <FaTwitter />, href: "#" },
  { id: 2, name: "discord", icon: <FaDiscord />, href: "#" },
  { id: 3, name: "instagram", icon: <FaInstagram />, href: "#" },
];
