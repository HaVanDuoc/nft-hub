import FloatingScrollPage from "@/components/ui/floating/FloatingScrollPage";
import Footer from "@/components/layout/footer/FooterComponent";
import NavbarContainer from "@/components/layout/navbar/NavbarContainer";
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
