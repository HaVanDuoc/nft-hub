import Footer from "@/components/layout/footer/FooterComponent";
import NavbarContainer from "@/components/layout/navbar/NavbarContainer";
import FloatingContainer from "@/components/ui/floating/FloatingContainer";
import UpToTopComponent from "@/components/ui/floating/UpTopTopComponent";

const itemsFloating = [<UpToTopComponent key={1} />];

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
