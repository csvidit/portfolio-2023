"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Portrait = () => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      layout
      onHoverStart={() => {
        setHover(true);
      }}
      onHoverEnd={() => {
        setHover(false);
      }}
      className="flex flex-col relative col-span-1 lg:row-span-2 w-full h-full min-h-[400px] lg:w-100 lg:h-100 rounded-[3rem]"
    >
      <Image
        src="/vidit-edb.png"
        fill
        alt="Map of Indianapolis"
        className="rounded-[3rem] object-cover"
      />
      {/* <motion.div
        layout
        className="absolute z-20 bottom-2 self-center flex flex-row rounded-full w-4/6 border-neutral-500 bg-neutral-900 bg-opacity-60 backdrop-blur-md p-1 justify-between"
      >
        <motion.button className="flex flex-row justify-center items-center rounded-full bg-neutral-900 text-neutral-100 p-1 w-6 h-6 border border-neutral-500">
          <BsChevronLeft />
        </motion.button>
        <motion.div></motion.div>
        <motion.button className="flex flex-row justify-center items-center rounded-full bg-neutral-900 text-neutral-100 p-1 w-6 h-6 border border-neutral-500">
          <BsChevronRight />
        </motion.button>
      </motion.div> */}
      {hover && (
        <AnimatePresence>
          <motion.div
            layout
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            className="w-full h-full bg-neutral-900 bg-opacity-60 z-10 backdrop-blur-sm geom rounded-[3rem] flex justify-center items-center"
          >
            Edinburgh, Scotland
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default Portrait;
