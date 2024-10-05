import React from "react";
import BrandSection from "@/components/home/BrandSection/BrandSection";
import CollectionSection from "@/components/home/collectionSection/CollectionSection";
import ChooseUsSection from "@/components/home/whyChooseUsSection/ChooseUsSection";
import StatsSection from "@/components/home/statsSection/StatsSection";
import WorksSection from "@/components/home/worksSection.tsx/WorksSection";
import DropSection from "@/components/home/dropSection/DropSection";
import RoadmapSection from "@/components/home/roadmapSection/RoadmapSection";
import MeetSection from "@/components/home/meetSection/MeetSection";
import QuestionSection from "@/components/home/questionSection/QuestionSection";
import CtaSection from "@/components/home/CtaSection/CtaSection";
import HeroSection from "@/components/home/HeroSection/HeroSection";

const Home = () => {
  return (
    <div className="pb-20">
      <HeroSection />
      <BrandSection />
      <CollectionSection />
      <ChooseUsSection />
      <StatsSection />
      <WorksSection />
      <DropSection />
      <RoadmapSection />
      <MeetSection />
      <QuestionSection />
      <CtaSection />
    </div>
  );
};

export default Home;
