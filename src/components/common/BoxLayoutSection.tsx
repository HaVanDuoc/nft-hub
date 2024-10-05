import React from "react";
import DIVIDER from "@/assets/icon/divider-icon.svg";
import Image from "next/image";

interface BoxLayoutSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  divider?: boolean;
}

const BoxLayoutSection = ({
  children,
  className = "",
  divider = true,
  ...props
}: BoxLayoutSectionProps) => {
  return (
    <section
      {...props}
      className={`container flex flex-col justify-center items-center gap-16 my-24 ${className}`}
    >
      {children}

      {divider && (
        <div>
          <Image src={DIVIDER} alt="icon divider" className="w-auto h-auto" />
        </div>
      )}
    </section>
  );
};

export default BoxLayoutSection;
