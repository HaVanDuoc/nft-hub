import AnimationFadeUpComponent from "@/components/common/AnimationFadeUpComponent";
import BoxLayoutSection from "@/components/common/BoxLayoutSection";
import React from "react";

const STATS = [
  { id: 1, label: "Wallets Connected", value: "400k+" },
  { id: 2, label: "Wallets Connected", value: "20k+" },
  { id: 3, label: "Creative artists", value: "230+" },
  { id: 4, label: "Estimated value", value: "2.5x" },
];

const StatsSection = () => {
  return (
    <AnimationFadeUpComponent>
      <BoxLayoutSection>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {STATS.map((stats) => (
            <div className="flex flex-col gap-5 text-center" key={stats.id}>
              <h1>{stats.value}</h1>
              <p>{stats.label}</p>
            </div>
          ))}
        </div>
      </BoxLayoutSection>
    </AnimationFadeUpComponent>
  );
};

export default StatsSection;
