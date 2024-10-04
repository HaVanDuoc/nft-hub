import React from "react";
import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";
import TitleComponent from "@/components/common/TitleComponent";
import ButtonGradient from "@/components/common/ButtonGradient";
import BG from "@/assets/cta/div.cta-bg.png";
import Image from "next/image";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import { FaArrowRight } from "react-icons/fa";

const CtaSection = () => {
  return (
    <AnimationFadeUpComponent>
      <Image
        src={BG.src}
        alt="CTA Background"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <BoxLayoutSection>
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
