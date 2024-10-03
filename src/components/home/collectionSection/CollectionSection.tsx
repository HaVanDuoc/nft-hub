"use client";

import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ART_1 from "@/assets/art/art (1).png";
import ART_2 from "@/assets/art/art (2).png";
import ART_3 from "@/assets/art/art (3).png";
import ART_4 from "@/assets/art/art (4).png";
import Image from "next/image";
import Link from "next/link";
import TitleComponent from "@/components/common/TitleComponent";
import ButtonGradient from "@/components/common/ButtonGradient";
import { FaArrowRight } from "react-icons/fa";
import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";

const COLLECTIONS = [
  { id: 1, name: "Metaverse", author: "TheSalvare", art: ART_1.src, href: "#" },
  { id: 2, name: "Polly Doll", author: "TheNative", art: ART_2.src, href: "#" },
  { id: 3, name: "Alec Art", author: "GeorgZvic", art: ART_3.src, href: "#" },
  { id: 4, name: "Toxic Poeth", author: "YazoiLup", art: ART_4.src, href: "#" },
  { id: 5, name: "Metaverse", author: "TheSalvare", art: ART_1.src, href: "#" },
  { id: 6, name: "Polly Doll", author: "TheNative", art: ART_2.src, href: "#" },
  { id: 7, name: "Alec Art", author: "GeorgZvic", art: ART_3.src, href: "#" },
];

const CollectionSection = () => {
  const spaceBetween = 30;

  return (
    <AnimationFadeUpComponent>
      <BoxLayoutSection>
        <TitleComponent
          title="Nfthub's collection"
          gradientWords={["collection"]}
        />
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination]}
          loop={true}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: spaceBetween,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: Number(spaceBetween) - 10,
            },
            521: {
              slidesPerView: 1,
            },
          }}
          className="w-full"
        >
          {COLLECTIONS.map((art, index) => (
            <SwiperSlide key={index}>
              <Link href={art.href} className="text-center space-y-3 group">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    width={264}
                    height={353}
                    src={art.art}
                    alt={`Banner ${index + 1}`}
                    className="w-full h-full object-cover aspect-[9/16] group-hover:scale-110 animation"
                  />
                </div>
                <div className="font-bold text-2xl capitalize group-hover:text-gradient animation">
                  #{art.name}
                </div>
                <p className="text-sm capitalize">By {art.author}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <ButtonGradient endContent={<FaArrowRight />}>
          View collection
        </ButtonGradient>
      </BoxLayoutSection>
    </AnimationFadeUpComponent>
  );
};

export default CollectionSection;
