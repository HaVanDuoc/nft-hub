import React from "react";
import DIVIDER from "@/assets/icon/divider-icon.svg";
import Image from "next/image";

const BoxLayoutSection = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={`container flex flex-col justify-center items-center gap-16 ${className}`}
    >
      {children}

      <div>
        <Image src={DIVIDER} alt="icon divider" className="w-auto h-auto" />
      </div>
    </section>
  );
};

export default BoxLayoutSection;
