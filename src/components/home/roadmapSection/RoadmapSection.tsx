import React from "react";
import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import TitleComponent from "@/components/common/TitleComponent";
import { ROADMAP } from "@/data/home/roadmap";
import FormatNumberToString from "@/helpers/FormatNumberToString";
import AnimationClick from "@/components/common/AnimationClick";

const RoadmapPercent = ({ percent }: { percent: number }) => (
  <AnimationClick>
    <div className="relative rotate-[16deg] flex items-center justify-center w-12 h-12 rounded-full bg-gradient pointer-events-none">
      <div className="absolute top-2 text-white text-2xl font-semibold leading-none">
        {percent}
      </div>
      <div className="absolute -bottom-0.5 text-white font-bold">%</div>
    </div>
  </AnimationClick>
);

const RoadmapSection = () => {
  return (
    <section id="roadmap">
      <AnimationFadeUpComponent>
        <BoxLayoutSection>
          <TitleComponent title="Nfthub's Roadmap" gradientWords={["Roadmap"]} />
  
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 lg:gap-12 ">
            {ROADMAP.map((road, index) => (
              <div
                className="border border-gray-300 rounded-3xl p-5 sm:p-7 relative"
                key={index}
              >
                <div className="flex flex-row justify-between items-center">
                  <div className="text-lg sm:text-xl font-bold text-gradient">
                    Phase {FormatNumberToString(index + 1)}
                  </div>
                  <RoadmapPercent percent={road.percent} />
                </div>
  
                <div className="space-y-5">
                  <h4>{road.name}</h4>
                  <p className="text-sm sm:text-base">{road.des}</p>
                </div>
  
                <div className="border w-[35%] my-5 sm:my-8"></div>
  
                <div className="px-5 space-y-3">
                  {road.bottom.map((item) => (
                    <p className="text-black dark:text-light" key={item.id}>
                      {item.value}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </BoxLayoutSection>
      </AnimationFadeUpComponent>
    </section>
  );
};

export default RoadmapSection;
