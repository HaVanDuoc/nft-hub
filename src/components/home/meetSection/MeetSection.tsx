import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import TitleComponent from "@/components/common/TitleComponent";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaInstagram, FaTwitter } from "react-icons/fa";
import { ARTISTS } from "@/data/home/artists";

const MeetSection = () => {
  return (
    <AnimationFadeUpComponent>
      <BoxLayoutSection>
        <TitleComponent
          title="Meet the artists"
          gradientWords={["the", "artists"]}
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-10 justify-between sm:pb-8">
          {ARTISTS.map((artist, index) => (
            <div
              className={`flex flex-col justify-center items-center gap-3 sm:gap-5 ${
                index % 2 === 0 ? "sm:translate-y-8" : ""
              }`}
              key={artist.id}
            >
              <div className="border rounded-3xl p-3">
                <Image
                  src={artist.avt}
                  alt="avatar artist"
                  width={142}
                  height={142}
                  className="w-full h-auto object-cover rounded-3xl"
                />
              </div>
              <p className="text-lg sm:text-xl font-bold">{artist.name}</p>
              <p>{artist.job}</p>
              <div className="flex flex-row gap-5 items-center">
                <Link href={"#"}>
                  <FaTwitter />
                </Link>
                <Link href={"#"}>
                  <FaDiscord />
                </Link>
                <Link href={"#"}>
                  <FaInstagram />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </BoxLayoutSection>
    </AnimationFadeUpComponent>
  );
};

export default MeetSection;
