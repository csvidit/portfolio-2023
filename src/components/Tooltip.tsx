"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { PiInfoDuotone } from "react-icons/pi";
import { useState } from "react";

const Tooltip = (props: { children: React.ReactNode }) => {
  const [hover, setHover] = useState(false);

  return (
    <MotionConfig
      transition={{
        type: "spring",
        duration: 0.2,
        damping: 20,
        stiffness: 200,
      }}
    >
      <motion.button
        onHoverStart={() => {
          setHover(true);
        }}
        onHoverEnd={() => {
          setHover(false);
        }}
        className="relative flex flex-col items-center h-fit"
      >
        {hover && (
          <AnimatePresence mode="sync">
            <motion.div
              layout
              initial={{ translateY: 40, opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              exit={{ translateY: 40, opacity: 0 }}
              className="absolute bottom-full mb-4 z-40 w-max px-4 py-2 rounded-[3rem] flex flex-col items-center border border-neutral-800 bg-neutral-950 text-base"
            >
              <motion.div>{props.children}</motion.div>
            </motion.div>
          </AnimatePresence>
        )}

        <motion.div>
          <PiInfoDuotone />
        </motion.div>
      </motion.button>
    </MotionConfig>
  );
};

export default Tooltip;
