import React from "react";
import NavbarContainer from "@/components/home/Navbar/NavbarContainer";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import BrandSection from "@/components/home/BrandSection/BrandSection";
import CollectionSection from "@/components/home/collectionSection/CollectionSection";
import ChooseUsSection from "@/components/home/whyChooseUsSection/ChooseUsSection";
import StatsSection from "@/components/home/statsSection/StatsSection";
import WorksSection from "@/components/home/worksSection.tsx/WorksSection";
import DropSection from "@/components/home/dropSection/DropSection";
import RoadmapSection from "@/components/home/roadmapSection/RoadmapSection";
import MeetSection from "@/components/home/meetSection/MeetSection";
import QuestionSection from "@/components/home/questionSection/QuestionSection";

const Home = () => {
  return (
    <div className="pb-20">
      <header className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 dark:from-dark dark:to-dark">
        <NavbarContainer />
        <HeroSection />
      </header>
      <BrandSection />
      <CollectionSection />
      <ChooseUsSection />
      <StatsSection />
      <WorksSection />
      <DropSection />
      <RoadmapSection />
      <MeetSection />
      <QuestionSection />
    </div>
  );
};

export default Home;
