import React from "react";
import NavbarContainer from "@/components/home/Navbar/NavbarContainer";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import BrandSection from "@/components/home/BrandSection/BrandSection";
import CollectionSection from "@/components/home/collectionSection/CollectionSection";
import ChooseUsSection from "@/components/home/whyChooseUsSection/ChooseUsSection";
import StatsSection from "@/components/home/statsSection/StatsSection";

const Home = () => {
  return (
    <div className="space-y-20 pb-20">
      <header className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 dark:from-dark dark:to-dark">
        <NavbarContainer />
        <HeroSection />
      </header>
      <BrandSection />
      <CollectionSection />
      <ChooseUsSection />
      <StatsSection />
    </div>
  );
};

export default Home;
