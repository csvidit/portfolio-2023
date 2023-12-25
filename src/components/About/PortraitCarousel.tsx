"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { PiCaretCircleLeftFill, PiCaretCircleRightFill } from "react-icons/pi";

const PortraitCarousel = () => {
  const [hover, setHover] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const srcList = ["/vidit-axo.webp", "/vidit-grad.webp", "/vidit-edb.webp"];

  const captionList = [
    "AXO Formal 2021",
    "Graduation 2023",
    "Edinburgh, Scotland",
  ];

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
      <motion.div
        layout
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{
          type: "spring",
          duration: 0.2,
        }}
        className="rounded-[3rem] object-cover"
      >
        <Image
          key={srcList[currentImage]}
          src={process.env.NEXT_PUBLIC_DIGITALOCEAN_CDN_ENDPOINT+srcList[currentImage]}
          fill
          alt={captionList[currentImage]}
          className="rounded-[3rem] object-cover"
        />
      </motion.div>

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
          className="flex flex-col space-y-2 w-full h-full rounded-[3rem] justify-center items-center"
        >
          <motion.div className="absolute bottom-4 flex flex-row space-x-16 justify-around items-center text-xl lg:text-2xl px-2 py-1 rounded-[3rem] bg-neutral-900 bg-opacity-40 backdrop-blur-md text-neutral-100 text-opacity-60">
            <motion.button
              className="flex w-fit"
              onClick={() =>
                setCurrentImage(currentImage == 0 ? 2 : currentImage - 1)
              }
            >
              <PiCaretCircleLeftFill />
            </motion.button>
            <motion.button
              className="flex w-fit"
              onClick={() =>
                setCurrentImage(currentImage == 2 ? 0 : currentImage + 1)
              }
            >
              <PiCaretCircleRightFill />
            </motion.button>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default PortraitCarousel;
