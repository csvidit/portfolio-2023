'use client'

import { motion } from "framer-motion";

const BackslashLogo = () => {
  return (
    <motion.span
      animate={{
        opacity: [1, 0, 1],
        // rotate: [0, 15, 0],
        transition: {
          duration: 1,
          type: "tween",
          ease: "easeIn",
          repeat: Infinity,
          repeatType: "loop",
        },
      }}
    >
      \
    </motion.span>
  );
};

export default BackslashLogo;
