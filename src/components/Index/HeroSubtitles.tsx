"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSubtitles = () => {
  const [currentBlock, setCurrentBlock] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBlock((prevBlock) => (prevBlock + 1) % textBlocks.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const textBlocks = [
    "Software Engineer",
    "Web Developer",
    "Android Developer",
    "UI Designer",
    "Taylor Swift Fan"
  ];

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        layout
        className="flex flex-col space-y-2.5 lg:space-y-0 lg:flex-row lg:space-x-2.5 flex-wrap text-2xl lg:text-4xl w-max lg:h-[2.75rem] overflow-hidden select-none"
      >
        <motion.div
          layout
          className="flex flex-row space-x-2.5 text-neutral-100 geom"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              layout
              key={currentBlock}
              className="w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "tween", duration: 0.5 }}
            >
              <AnimatePresence>
                <motion.span layout>{textBlocks[currentBlock]}</motion.span>
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default HeroSubtitles;
