import React from "react";
import Image from "next/image";
import ButtonGradient from "@/components/common/ButtonGradient";
import { Avatar, AvatarGroup } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";

import IMG_BANNER from "@/assets/header/banner.png";
import AVATAR_1 from "@/assets/avatar/avatar (1).png";
import AVATAR_2 from "@/assets/avatar/avatar (2).png";
import AVATAR_3 from "@/assets/avatar/avatar (3).png";
import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";

const HeroSection = () => {
  return (
    <AnimationFadeUpComponent>
      <section className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 dark:from-dark dark:to-dark">
        <div className="container lg:h-[calc(100vh-13vh)] flex flex-col lg:flex-row gap-10 items-center py-[13vh] lg:py-0">
          {/* Left */}
          <div className="w-full space-y-8 text-center lg:text-left">
            <h1 className="">High Quality NFT Collection</h1>
            <p>
              {`A 890 piece custom Nfthub's collection is joining the NFT space on
              Opensea.`}
            </p>
            <ButtonGradient endContent={<FaArrowRight />}>
              View in OPENSEA
            </ButtonGradient>

            <div className="flex flex-row gap-3 items-center justify-center lg:justify-start">
              <AvatarGroup isBordered>
                <Avatar src={AVATAR_1.src} alt="avatar user" />
                <Avatar src={AVATAR_2.src} alt="avatar user" />
                <Avatar src={AVATAR_3.src} alt="avatar user" />
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
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </AnimationFadeUpComponent>
  );
};

export default HeroSection;
