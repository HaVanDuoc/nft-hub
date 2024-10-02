import Image from "next/image";
import React from "react";
import LOGO from "@/assets/header/logo.png";

const Logo = ({
  width = 145,
  height = 40,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Image
      src={LOGO.src}
      alt="Logo"
      width={width}
      height={height}
      className="object-cover"
    />
  );
};

export default Logo;
