import React from "react";
import Footer from "@/components/layout/ui/footer/Footer";
import NavbarContainer from "@/components/layout/ui/header/Navbar/NavbarContainer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <NavbarContainer />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
