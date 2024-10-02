import React from "react";
import Link from "next/link";
import Logo from "@/components/home/Logo";
import { MEDIA_ICONS, NAV_LINKS } from "@/constants/header";
import { IoMenu } from "react-icons/io5";
import AnimationClick from "@/components/animation/AnimationClick";

type Props = {
  toggleNav: () => void;
};

const Navbar: React.FC<Props> = ({ toggleNav }) => {
  return (
    <div className="w-full h-[13vh]">
      <div className="container h-full mx-auto flex items-center justify-between">
        <Logo />
        {/* Nav Links */}
        <nav className="hidden lg:flex flex-row gap-7">
          {NAV_LINKS.map((nav) => (
            <Link
              href={nav.href}
              key={nav.id}
              className="font-bold hover:text-gradient"
            >
              {nav.name}
            </Link>
          ))}
        </nav>
        {/* Media */}
        <section className="hidden lg:flex flex-row gap-3">
          {MEDIA_ICONS.map((media) => (
            <Link href={media.href} key={media.name}>
              <span>{media.icon}</span>
            </Link>
          ))}
        </section>
        {/* Button Menu */}
        <div className="block lg:hidden text-2xl" onClick={toggleNav}>
          <AnimationClick>
            <IoMenu />
          </AnimationClick>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
