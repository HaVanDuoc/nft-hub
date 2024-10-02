"use client";

import ButtonGradient from "@/components/common/ButtonGradient";
import { IMG_BANNER } from "@/libs";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="container h-[calc(100vh-13vh)] flex flex-col lg:flex-row gap-10 items-center my-[13vh] lg:my-0">
      {/* Left */}
      <div className="w-full space-y-8 text-center lg:text-left">
        <h1 className="">High Quality NFT Collection</h1>
        <p>
          A 890 piece custom Nfthub's collection is joining the NFT space on
          Opensea.
        </p>
        <ButtonGradient endContent={<FaArrowRight />}>
          View in OPENSEA
        </ButtonGradient>

        <div className="flex flex-row gap-3 items-center justify-center lg:justify-start">
          <AvatarGroup isBordered>
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          </AvatarGroup>

          <div>
            <h3 className="text-3xl font-bold">47k+</h3>
            <p className="text-xs">Community members</p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="w-full flex justify-center items-center">
        <div className="w-[400px]">
          <Image
            src={IMG_BANNER.src}
            alt="banner"
            width={IMG_BANNER.width}
            height={IMG_BANNER.height}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
