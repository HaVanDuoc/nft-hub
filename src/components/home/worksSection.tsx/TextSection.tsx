import FormatNumberToString from "@/helpers/FormatNumberToString";
import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

type Props = {
  idx: number;
  title: string;
  content: { id: number; text: string }[];
  directMore: string;
};

const TextSection: React.FC<Props> = ({
  idx,
  title,
  content = [],
  directMore = "#",
}) => {
  return (
    <div className="flex flex-col gap-6 items-center sm:items-start text-center sm:text-left">
      <div className="text-gradient font-bold text-lg">
        {idx ? FormatNumberToString(idx) : ""}
      </div>
      <h3>{title}</h3>
      <div className="space-y-4">
        {content.map((p) => (
          <p key={p.id}>{p.text}</p>
        ))}
      </div>
      <Link
        href={directMore}
        className="w-fit font-bold flex flex-row items-center gap-2 border-b-2 border-gray-300 hover:border-b-gradient mb-1 group"
      >
        <span className="group-hover:text-gradient">Learn more</span>{" "}
        <span className="group-hover:-rotate-45 animation">
          <FaArrowRightLong />
        </span>
      </Link>
    </div>
  );
};

export default TextSection;
