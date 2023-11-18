"use client";

import { motion } from "framer-motion";

const gradientVariants = {
  initial: {
    background: "linear-gradient(to top, #0a0a0a, #f5f5f5)",
  },
  animate: {
    background: "radial-gradient(to top, #0a0a0a, #f5f5f5)",
    // backgroundPosition: ["0", "100%"], // Move the gradient to the right
  },
};

const InfoSticker = () => {
  return (
    <motion.div
      animate={{
        background: [
          "conic-gradient( from 0deg, #0a0a0a 60%, #f5f5f5)",
          "conic-gradient( from 360deg, #0a0a0a 60%, #f5f5f5)",
        ],
      }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration: 2,
        type: "tween"
      }}
      className="mt-24 p-[1px] rounded-[3rem] w-fit"
    >
      <motion.div className="bg-neutral-950 rounded-[3rem] w-fit px-4 py-1 text-sm lg:text-lg extended text-neutral-100 bg-opacity-[95%]">
        coming soon
      </motion.div>
    </motion.div>
  );
};

export default InfoSticker;

// bg-gradient-to-tr from-neutral-950 to-neutral-100 via-neutral-950

// bg-gradient-to-tr from-neutral-950 to-neutral-900 via-neutral-950
