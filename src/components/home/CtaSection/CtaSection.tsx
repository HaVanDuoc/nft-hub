import React from "react";
import Image from "next/image";
import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";
import TitleComponent from "@/components/common/TitleComponent";
import ButtonGradient from "@/components/common/ButtonGradient";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import { FaArrowRight } from "react-icons/fa";
import BG from "@/assets/cta/div.cta-bg.png";

const CtaSection = () => {
  return (
    <AnimationFadeUpComponent>
      <Image
        src={BG.src}
        alt="CTA Background"
        fill
        quality={100}
        className="object-cover"
      />
      <BoxLayoutSection divider={false}>
        <div className="py-20 flex flex-col gap-5 sm:gap-8 justify-center items-center text-center">
          <TitleComponent
            title="Let's start minting"
            gradientWords={["minting"]}
          />
          <p>Invest and manage all your NFTs at one place.</p>
          <ButtonGradient endContent={<FaArrowRight />}>
            Get started
          </ButtonGradient>
        </div>
      </BoxLayoutSection>
    </AnimationFadeUpComponent>
  );
};

export default CtaSection;
