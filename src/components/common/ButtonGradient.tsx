import { Button } from "@nextui-org/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  endContent?: React.ReactNode;
  className?: string;
};

const ButtonGradient: React.FC<Props> = ({
  children,
  endContent,
  className = "",
}) => {
  return (
      <Button
      className={`bg-gradient text-light font-bold rounded-full py-6 px-10 ${className}`}
      endContent={endContent}
      >
        {children}
      </Button>
  );
};

export default ButtonGradient;
