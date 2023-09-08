'use client'

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const PhotoItem = (props: {
  width: number;
  height: number;
  src: string;
  caption: string;
  priority: number
}) => {
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
      className={`relative w-full h-full col-span-2 ${props.priority == 0 ? "lg:row-span-2" : "lg:row-span-1"} flex flex-col space-y-8 justify-between rounded-[3rem] p-8 lg:p-12 bg-neutral-900`}
    >
      <Image
        src={props.src}
        fill
        alt={props.caption}
        className="rounded-[3rem] object-cover"
      />
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
            {props.caption}
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default PhotoItem;