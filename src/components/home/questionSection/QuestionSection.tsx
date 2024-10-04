"use client";

import React from "react";
import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import TitleComponent from "@/components/common/TitleComponent";
import { QUESTIONS } from "@/data/home/questions";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";

const QuestionSection = () => {
  const classNameIndicator =
    "text-xl sm:text-2xl md:text-3xl text-dark dark:text-light data-[open=true]:!text-[var(--primary-color)] rotate-0 data-[open=true]:-rotate-180 transition-transform duration-500 border border-gray-200 data-[open=true]:border-[var(--primary-color)] p-2 rounded-full";

  return (
    <AnimationFadeUpComponent>
      <BoxLayoutSection>
        <TitleComponent
          title="Your questions, answered!"
          gradientWords={["answered!"]}
        />

        <div className="w-full max-w-screen-lg mx-auto space-y-5 sm:space-y-10">
          {QUESTIONS.map(({ id, ask, answer }, index) => (
            <Accordion
              selectionMode="multiple"
              itemClasses={{
                title: "font-bold text-xl sm:text-2xl md:text-3xl capitalize",
                content: "text-base sm:text-lg text-[#5e6075]",
                indicator: classNameIndicator,
              }}
              key={id}
            >
              <AccordionItem
                aria-label={`Question ${index}`}
                title={`${(index + 1).toString().padStart(2, "0")} ${ask}`}
                indicator={<IoIosArrowDown />}
              >
                {answer}
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </BoxLayoutSection>
    </AnimationFadeUpComponent>
  );
};

export default QuestionSection;
