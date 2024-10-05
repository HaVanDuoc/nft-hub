import LogoComponent from "@/components/ui/LogoComponent";
import { FOOTER_NAV } from "@/data/footer/footer";
import { MEDIA_ICONS } from "@/data/home/header";
import Link from "next/link";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const FooterComponent = () => {
  const gap = "gap-10 md:gap-20";

  return (
    <footer className="py-8 pt-14 sm:pt-20 border-t border-gray-300">
      <div className={`container grid md:grid-cols-2 ${gap}`}>
        <div className="space-y-5 lg:text-left">
          <LogoComponent logo="NFTHub" className="text-gradient" />
          <p className="lg:w-[70%]">
            Join our Discord channel or follow us on Twitter to keep up to date
            with our latest work and announcements.
          </p>
          <div className="flex flex-row gap-5 items-center">
            {MEDIA_ICONS.map((media) => (
              <div key={media.id}>{media.icon}</div>
            ))}
          </div>
        </div>

        <div className={`flex flex-col md:flex-row lg:justify-end ${gap}`}>
          {FOOTER_NAV.map((nav) => (
            <div key={nav.id}>
              <div className="text-lg font-bold mb-5">{nav.title}</div>
              <ul className="space-y-4">
                {nav.listDirection.map((item) => (
                  <li key={item.id}>
                    <Link href={item.href}>
                      <p>{item.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="md:col-span-2 flex flex-col md:flex-row items-center md:justify-between gap-3 sm:gap-5">
          <p>Copyright © 2023 Nfthub All Rights Reserved.</p>

          <div className="flex flex-row items-center gap-7 lg:justify-end">
            <p>Privacy policy</p>
            <p className="flex items-center gap-3">
              Terms of Use <IoIosArrowUp />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
