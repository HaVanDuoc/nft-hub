import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import TitleComponent from "@/components/common/TitleComponent";
import React from "react";
import TextSection from "./TextSection";
import ImageSection from "./ImageSection";
import { WORKS } from "@/data/home/works";

const WorksSection = () => {
  return (
    <BoxLayoutSection>
      <AnimationFadeUpComponent>
        <TitleComponent title="How it works!" gradientWords={["works!"]} />
      </AnimationFadeUpComponent>

      {WORKS.map((work, index) => (
        <AnimationFadeUpComponent key={work.id}>
          <div className="">
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              } gap-24 items-center justify-center`}
            >
              <div className="flex-1">
                <ImageSection img={work.img} />
              </div>
              <div className="flex-1">
                <TextSection
                  idx={work.id}
                  title={work.title}
                  content={work.content}
                  directMore={work.directMore}
                />
              </div>
            </div>
          </div>
        </AnimationFadeUpComponent>
      ))}
    </BoxLayoutSection>
  );
};

export default WorksSection;
