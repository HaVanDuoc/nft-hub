import pathPage from "@/libs/path";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";

export const NAV_LINKS = [
  { id: 1, name: "Home", href: `/${pathPage.home}`, items: [] },
  {
    id: 2,
    name: "Collection",
    href: `/${pathPage.collection}`,
    items: [
      { id: 1, name: "Item", href: "#" },
      { id: 2, name: "Item", href: "#" },
      { id: 3, name: "Item", href: "#" },
    ],
  },
  { id: 3, name: "Choose", href: `/${pathPage.choose}`, items: [] },
  { id: 4, name: "About", href: `/${pathPage.about}`, items: [] },
  { id: 5, name: "Roadmap", href: `/${pathPage.roadmap}`, items: [] },
  { id: 6, name: "Blog", href: `/${pathPage.blog}`, items: [] },
];

export const MEDIA_ICONS = [
  { id: 1, name: "twitter", icon: <FaTwitter />, href: "#" },
  { id: 2, name: "discord", icon: <FaDiscord />, href: "#" },
  { id: 3, name: "instagram", icon: <FaInstagram />, href: "#" },
];
