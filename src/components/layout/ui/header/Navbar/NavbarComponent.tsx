"use client";

import React from "react";
import Link from "next/link";
import Logo from "@/components/home/Logo";
import { MEDIA_ICONS, NAV_LINKS } from "@/data/home/header";
import { IoMenu } from "react-icons/io5";
import AnimationClick from "@/components/common/AnimationClick";
import ThemeSwitcher from "@/components/home/ThemeSwitcher";
import { Navbar } from "@nextui-org/react";
import { usePathname } from "next/navigation";

type Props = {
  toggleNav: () => void;
};

const NavbarComponent: React.FC<Props> = ({ toggleNav }) => {
  const pathName = usePathname();

  return (
    <Navbar
      shouldHideOnScroll
      className="w-full h-[13vh] bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 dark:from-dark dark:to-dark"
    >
      <div className="container h-full mx-auto flex items-center justify-between">
        <Logo />
        {/* Nav Links */}
        <nav className="hidden lg:flex flex-row gap-7">
          {NAV_LINKS.map((nav) => (
            <Link
              href={nav.href}
              key={nav.id}
              className={`font-semibold hover:text-gradient ${
                pathName === nav.href ? "text-gradient" : ""
              }`}
            >
              {nav.name}
            </Link>
          ))}
        </nav>
        {/* Media */}
        <section className="hidden lg:flex flex-row items-center gap-8">
          {MEDIA_ICONS.map((media) => (
            <Link href={media.href} key={media.name}>
              <span>{media.icon}</span>
            </Link>
          ))}

          {/* Button Toggle Theme Dark Light */}
          <ThemeSwitcher />
        </section>

        {/* Button Menu */}
        <div className="block lg:hidden text-2xl" onClick={toggleNav}>
          <AnimationClick>
            <IoMenu />
          </AnimationClick>
        </div>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
