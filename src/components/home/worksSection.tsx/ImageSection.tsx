import Image from "next/image";
import React from "react";

const ImageSection = ({ img }: { img: string }) => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={img}
        alt=""
        width={535}
        height={517.86}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default ImageSection;
