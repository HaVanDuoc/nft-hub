"use client";

import React from "react";
import Image from "next/image";
import { BRANDS } from "@/data/home/brands";
import { motion } from "framer-motion";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";

const BrandSection = () => {
  return (
    <BoxLayoutSection>
      <section className="flex flex-row flex-wrap items-center justify-center gap-10 w-full overflow-hidden">
        {BRANDS.map((brand, index) => (
          <motion.div
            key={brand.id}
            className={`h-[35px] sm:h-[40px] flex flex-row items-center gap-3 ${brand.className}`}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }} // Hiệu ứng xuất hiện với độ trễ dần
          >
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
              <div className="font-orbitron text-xl sm:text-2xl">
                {brand.name}
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </BoxLayoutSection>
  );
};

export default BrandSection;
