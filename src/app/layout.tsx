import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";

const font = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NFT Hub",
  description: "NFT Website Template using NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <NextUIProvider>
          <NextThemesProvider attribute="class">{children}</NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}
