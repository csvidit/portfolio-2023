"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const PhotoItem = (props: {
  width: number;
  height: number;
  src: string;
  caption: string;
  priority: number;
  date: string;
}) => {
  const [hover, setHover] = useState(false);

  const date = new Date(props.date);
  let dateString = date.toDateString();
  dateString = dateString.substring(dateString.indexOf(" "));

  return (
    <motion.div
      layout
      onHoverStart={() => {
        setHover(true);
      }}
      onHoverEnd={() => {
        setHover(false);
      }}
      className={`relative ${
        props.priority == 0
          ? "lg:col-span-2 lg:row-span-1 aspect-square"
          : "lg:col-span-2 lg:row-span-1 aspect-square"
      } flex flex-col rounded-[3rem] bg-neutral-900 `}
    >
      <Image
        // width={props.width}
        // height={props.height}
        src={props.src}
        fill
        alt={props.caption}
        className="rounded-[3rem] w-full h-full object-cover aspect-square"
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
            className="absolute top-0 bottom-0 right-0 left-0 w-full h-full bg-neutral-900 bg-opacity-60 z-10 backdrop-blur-sm geom rounded-[3rem] flex flex-col space-y-4 text-center flex-wrap justify-center items-center p-8 lg:p-12"
          >
            <motion.caption>{props.caption}</motion.caption>
            {/* <motion.div className="flex flex-row space-x-2 flex-wrap items-center">
              <PiCalendarBlankDuotone />
              <motion.div className="uppercase">{dateString}</motion.div>
            </motion.div> */}
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default PhotoItem;
