import React from "react";

type TitleComponentProps = {
  title: string;
  gradientWords: string[]; // Mảng các từ cần áp dụng gradient
  className?: string;
};

const TitleComponent = ({
  title,
  gradientWords,
  className = "",
}: TitleComponentProps) => {
  // Tách các từ trong tiêu đề
  const words = title.split(" ");

  return (
    <h2 className={`text-center ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className={gradientWords.includes(word) ? "text-gradient " : ""}
        >
          {word}{" "}
        </span>
      ))}
    </h2>
  );
};

export default TitleComponent;
