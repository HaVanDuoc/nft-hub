import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import TitleComponent from "@/components/common/TitleComponent";
import { Button, Input } from "@nextui-org/react";
import React from "react";

const DropSection = () => {
  return (
    <AnimationFadeUpComponent>
      <BoxLayoutSection>
        <div className="text-center border rounded-2xl shadow-sm w-full flex flex-col gap-5 sm:gap-8 justify-center items-center p-5 sm:p-10 lg:p-14">
          <TitleComponent
            title="Never miss a drop!"
            gradientWords={["miss", "a", "drop!"]}
          />
          <p>Subscribe to our super-rare and exclusive drops & collectibles.</p>
          <form className="flex flex-wrap gap-3 items-center justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              classNames={{
                base: "rounded-full overflow-hidden lg:w-[320px]",
                input: "pl-2",
              }}
            />
            <Button
              type="submit"
              className="bg-gradient size-30 sm:size-35 text-light font-semibold rounded-full"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </BoxLayoutSection>
    </AnimationFadeUpComponent>
  );
};

export default DropSection;
