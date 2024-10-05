import React from "react";
import Header from "@/components/layout/ui/header/Header";
import Footer from "@/components/layout/ui/footer/Footer";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
