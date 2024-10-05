import React from "react";

type Props = {
  logo: string | React.ReactNode;
  className?: string;
};

const LogoComponent = ({ logo, className }: Props) => {
  return <div className={`text-3xl font-orbitron ${className}`}>{logo}</div>;
};

export default LogoComponent;
