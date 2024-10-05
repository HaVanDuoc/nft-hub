import FloatingScrollPage from "@/components/ui/floating/FloatingScrollPage";
import Footer from "@/components/layout/footer/Footer";
import NavbarContainer from "@/components/layout/header/Navbar/NavbarContainer";
import FloatingContainer from "@/components/ui/floating/FloatingContainer";

const itemsFloating = [<FloatingScrollPage key={1} />];

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <FloatingContainer items={itemsFloating} />
      <NavbarContainer />
      {children}
      <Footer />
    </>
  );
}
