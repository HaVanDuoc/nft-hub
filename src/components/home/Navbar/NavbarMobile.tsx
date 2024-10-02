import React from "react";
import Logo from "@/components/home/Logo";
import { IoIosAdd, IoIosClose } from "react-icons/io";
import { NAV_LINKS } from "@/constants/header";
import AnimationClick from "@/components/animation/AnimationClick";

type Props = {
  show: boolean;
  toggleNav: () => void;
};

const NavbarMobile: React.FC<Props> = ({ show, toggleNav }) => {
  const py = `py-5`;
  const px = `px-6`;

  return (
    <nav
      className={`max-w-screen-xs fixed top-0 left-0 right-0 bottom-0 z-[200] h-[100vh] bg-light animation ${
        show ? "translate-x-0 shadow-2xl" : "translate-x-[-100%]"
      }`}
    >
      <div className="h-1 bg-main w-full"></div>
      <div className={`flex flex-row justify-between items-center ${py} ${px}`}>
        <Logo />
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
              <div className="p-1 text-xl rounded bg-gray-200">
                <AnimationClick>
                  <IoIosAdd />
                </AnimationClick>
              </div>
            )}
          </div>
        ))}
      </nav>
    </nav>
  );
};

export default NavbarMobile;
