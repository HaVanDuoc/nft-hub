import { Button } from "@nextui-org/react";
import React from "react";
import AnimationClick from "./AnimationClick";

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
    <AnimationClick>
      <Button
        className={`bg-gradient text-light font-bold rounded-full py-6 px-10 group ${className}`}
        endContent={
          <div className="group-hover:-rotate-45 animation">{endContent}</div>
        }
      >
        {children}
      </Button>
    </AnimationClick>
  );
};

export default ButtonGradient;
