import React from "react";

type TitleComponentProps = {
  title: string;
  gradientWords: string[]; // Mảng các từ cần áp dụng gradient
};

const TitleComponent = ({ title, gradientWords }: TitleComponentProps) => {
  // Tách các từ trong tiêu đề
  const words = title.split(" ");

  return (
    <h2>
      {words.map((word, index) => (
        <span
          key={index}
          className={gradientWords.includes(word) ? "text-gradient" : ""}
        >
          {word}{" "}
        </span>
      ))}
    </h2>
  );
};

export default TitleComponent;
