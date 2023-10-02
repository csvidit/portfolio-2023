"use client";

import { MotionConfig, motion } from "framer-motion";

const MusicAnimation = () => {
  return (
    <MotionConfig
      transition={{
        type: "tween",
        repeat: Infinity,
        duration: 0.5,
        repeatType: "mirror",
      }}
    >
      <motion.div layout className="flex flex-row space-x-1 w-max items-center">
        <motion.div
          layout
          className="w-1 h-1 bg-indigo-500 rounded-md"
          animate={{ height: ["4px", "16px"] }}
        ></motion.div>
        <motion.div
          layout
          className="w-1 h-1 bg-indigo-500 rounded-md"
          animate={{ height: ["6px", "18px", "12px"] }}
        ></motion.div>
        <motion.div
          layout
          className="w-1 h-1 bg-indigo-500 rounded-md"
          animate={{ height: ["20px", "8px"] }}
        ></motion.div>
      </motion.div>
    </MotionConfig>
  );
};

export default MusicAnimation;
