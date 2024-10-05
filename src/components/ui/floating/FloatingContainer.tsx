import React from "react";

type Props = {
  items: React.ReactNode[]; // items là một mảng chứa các component React
};

const FloatingContainer: React.FC<Props> = ({ items }) => {
  return (
    <div className="fixed bottom-[3vh] right-[2vw] flex flex-col gap-3 sm:gap-5 items-center justify-center z-[999]">
      {items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default FloatingContainer;
