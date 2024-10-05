"use client";

import utils from "@/utils";
import cn from "@/utils/tailwind-utils";
import { HTMLProps } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperOptions } from "swiper/types";

interface ISwiperProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: (item: any) => React.ReactNode;

  slidesPerView?: number;
  spaceBetween?: number;

  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };

  isAutoPlay?: boolean;
  isLoop?: boolean;
  isNavigation?: boolean;
  isPagination?: boolean;

  classNames?: {
    base?: HTMLProps<HTMLDivElement>["className"];
    innerWrapper?: HTMLProps<HTMLElement>["className"];
    slide?: HTMLProps<HTMLElement>["className"];
  };
}

const SwiperComponent: React.FC<ISwiperProps> = ({
  data,
  children,
  slidesPerView = 1,
  spaceBetween = 20,
  classNames,
  breakpoints = dataBreakpointsDefault,
  isAutoPlay = true,
  isNavigation = false,
  isPagination = false,
  isLoop,
}) => {
  return (
    <div data-slot="base" className={cn("w-full", classNames?.base)}>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        breakpoints={breakpoints}
        // loop={isLoop}
        loop={isLoop && data.length > slidesPerView}
        className={cn(
          "swiper__custom",
          { "!pb-10": isPagination },
          classNames?.innerWrapper
        )}
        autoplay={
          isAutoPlay
            ? {
                delay: 2500,
                pauseOnMouseEnter: true,
              }
            : false
        }
        navigation={isNavigation}
        pagination={isPagination ? { clickable: true } : false}
        modules={[Autoplay, Navigation, Pagination]}
        data-slot="innerWrapper"
      >
        {data?.map((item) => (
          <SwiperSlide
            data-slot="slide"
            key={utils.generateRandomAriaLabel("Slide_")}
            className={cn(classNames?.slide)}
          >
            {children(item)}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const dataBreakpointsDefault = {
  320: {
    slidesPerView: 1,
  },
  370: {
    slidesPerView: 1,
  },
  425: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
  1440: {
    slidesPerView: 3,
  },
};

export default SwiperComponent;
