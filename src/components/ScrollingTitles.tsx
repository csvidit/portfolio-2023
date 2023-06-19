'use client'
import { motion } from "framer-motion";

const ScrollingTitles = () => {
  return (
    <motion.div className="flex flex-col items-start text-2xl lg:text-4xl h-[2rem] lg:h-[2.75rem] overflow-hidden text-sky-500 group transition-all duration-200 ease-in-out">
      <motion.div
        initial={{ opacity: 100, translateY: "0%" }}
        animate={{
          opacity: [0, 100],
          translateY: ["-100%", "0%"],
          transition: {
            duration: 3,
            easings: ["easeIn", "easeOut"],
          },
        }}
      >
        Software Engineer
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: "-100%" }}
        animate={{
          opacity: [100, 0],
          translateY: ["0%", "-100%"],
          transition: {
            duration: 3,
            easings: ["easeIn", "easeOut"],
          },
        }}
      >
        UI Designer
      </motion.div>
    </motion.div>
  );
};

export default ScrollingTitles;
