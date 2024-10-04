import React from "react";
import NavbarContainer from "@/components/layout/ui/header/Navbar/NavbarContainer";
import HeroSection from "@/components/home/HeroSection/HeroSection";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 dark:from-dark dark:to-dark">
      <NavbarContainer />
      <HeroSection />
    </header>
  );
};

export default Header;
