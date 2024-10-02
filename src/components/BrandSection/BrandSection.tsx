import React from "react";
import Image from "next/image";
import { BRANDS } from "@/constants/brands";

const BrandSection = () => {
  return (
    <section className="flex flex-row flex-wrap items-center justify-center gap-10 w-full">
      {BRANDS.map((brand) => (
        <div
          className={`h-[35px] sm:h-[40px] flex flex-row items-center gap-3 ${brand.className}`}
          key={brand.id}
        >
          {brand.img && (
            <Image
              src={brand.img}
              alt={`Brand Logo ${brand.name}`}
              width={40}
              height={40}
              className="w-auto h-full object-cover"
            />
          )}
          <div className="font-orbitron text-xl sm:text-2xl">{brand.name}</div>
        </div>
      ))}
    </section>
  );
};

export default BrandSection;
