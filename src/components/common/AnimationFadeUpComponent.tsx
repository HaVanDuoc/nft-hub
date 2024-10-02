"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

const AnimationFadeUpComponent = ({ children, delay = 0.1 }: Props) => {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: delay }}
      initial={{
        y: 100,
        opacity: 0,
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationFadeUpComponent;
