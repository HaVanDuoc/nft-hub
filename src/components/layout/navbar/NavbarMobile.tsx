import React from "react";
import { IoIosAdd, IoIosClose } from "react-icons/io";
import { MEDIA_ICONS, NAV_LINKS } from "@/data/home/header";
import AnimationClick from "@/components/common/AnimationClick";
import ThemeSwitcher from "@/components/ui/ThemeSwitcherComponent";
import LogoComponent from "@/components/ui/LogoComponent";

type Props = {
  show: boolean;
  toggleNav: () => void;
};

const NavbarMobile: React.FC<Props> = ({ show, toggleNav }) => {
  const py = `py-5`;
  const px = `px-6`;

  return (
    <nav
      className={`max-w-screen-xs fixed top-0 left-0 right-0 bottom-0 border-r-1 border-light z-[200] h-[100vh] overflow-y-auto bg-light dark:bg-dark animation ${
        show ? "translate-x-0 shadow-2xl" : "translate-x-[-100%]"
      }`}
    >
      <div className="h-1 bg-main w-full"></div>
      <div className={`flex flex-row justify-between items-center ${py} ${px}`}>
        <LogoComponent logo="NFTHub" />
        <div className="text-3xl" onClick={toggleNav}>
          <AnimationClick>
            <IoIosClose />
          </AnimationClick>
        </div>
      </div>

      {/* nav */}
      <nav className="border-t-1 flex flex-col">
        {NAV_LINKS.map((nav) => (
          <div
            className={`border-b-1 py-3 ${px} flex flex-row justify-between items-center cursor-pointer group`}
            key={nav.id}
          >
            <div className="font-bold group-hover:text-gradient">
              {nav.name}
            </div>

            {nav.items.length > 0 && (
              <div className="p-1 text-xl rounded bg-gray-200 text-dark">
                <AnimationClick>
                  <IoIosAdd />
                </AnimationClick>
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Media */}
      <div className="flex flex-row gap-3 items-center justify-center my-5">
        {MEDIA_ICONS.map((media) => (
          <div
            className="border border-gray-200 hover:border-bg-gra rounded overflow-hidden p-2 cursor-pointer text-xl"
            key={media.id}
          >
            {media.icon}
          </div>
        ))}
      </div>

      {/* Toggle Theme Dark Light */}
      <div className="flex justify-center items-center w-full">
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default NavbarMobile;
