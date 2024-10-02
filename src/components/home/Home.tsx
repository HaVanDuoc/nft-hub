import React from "react";
import NavbarContainer from "@/components/home/Navbar/NavbarContainer";
import HeroSection from "@/components/home/HeroSection/HeroSection";
import BrandSection from "@/components/BrandSection/BrandSection";

const Home = () => {
  return (
    <div className="space-y-20 pb-20">
      <header>
        <NavbarContainer />
        <HeroSection />
      </header>
      <BrandSection />
    </div>
  );
};

export default Home;
