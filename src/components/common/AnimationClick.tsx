'use client'
import React from "react";
import { motion } from "framer-motion";

const AnimationClick = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimationClick;
