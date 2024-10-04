"use client";

import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import TitleComponent from "@/components/common/TitleComponent";
import ButtonGradient from "@/components/common/ButtonGradient";
import { FaArrowRight } from "react-icons/fa";
import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import { COLLECTIONS } from "@/data/home/collections";

const CollectionSection = () => {
  const spaceBetween = 30;

  return (
    <section id="collection">
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
    </section>
  );
};

export default CollectionSection;
