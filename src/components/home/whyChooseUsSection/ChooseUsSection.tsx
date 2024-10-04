import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import TitleComponent from "@/components/common/TitleComponent";
import React from "react";
import Image from "next/image";
import { CHOOSES } from "@/data/home/chooseUs";

const ChooseUsSection = () => {
  return (
    <section id="choose">
      <AnimationFadeUpComponent>
        <BoxLayoutSection>
          <TitleComponent
            title="Why choose us?"
            gradientWords={["choose", "us?"]}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8 items-center justify-center">
            {CHOOSES.map((choose, index) => (
              <div
                className={` ${index % 2 === 0 ? "md:pb-10" : "md:pt-10"}`}
                key={choose.id}
              >
                <div className="space-y-5 sm:space-y-7 border border-gray-300 py-10 px-8 rounded-lg">
                  <Image
                    src={choose.icon}
                    alt=""
                    className="w-[35px] sm:w-[40px] h-auto object-cover"
                  />
                  <h4>{choose.name}</h4>
                  <p>{choose.content}</p>
                </div>
              </div>
            ))}
          </div>
        </BoxLayoutSection>
      </AnimationFadeUpComponent>
    </section>
  );
};

export default ChooseUsSection;
