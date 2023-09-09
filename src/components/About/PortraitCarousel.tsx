"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { PiCaretCircleLeftFill, PiCaretCircleRightFill } from "react-icons/pi";

const PortraitCarousel = () => {
  const [hover, setHover] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const srcList = ["/vidit-edb.png", "/vidit-1.png"];

  const captionList = ["Edinburgh, Scotland", "Graduation 2023"];

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrentImage((previousImage) => (previousImage + 1) % srcList.length);
  //     }, 5000);

  //     return () => clearInterval(interval); // Cleanup on component unmount
  //   }, []);

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
      <AnimatePresence mode="wait">
        <motion.div
          layout
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1}}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          className="rounded-[3rem] object-cover"
        >
          <AnimatePresence>
            <Image
              key={srcList[currentImage]}
              src={srcList[currentImage]}
              fill
              alt="Map of Indianapolis"
              className="rounded-[3rem] object-cover"
            />
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
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
            className="flex flex-col space-y-2 w-full h-full bg-neutral-900 bg-opacity-60 z-10 backdrop-blur-sm geom rounded-[3rem] justify-center items-center"
          >
            {captionList[currentImage]}
            <motion.div className="absolute bottom-8 flex flex-row space-x-16 justify-around items-center text-xl lg:text-2xl px-2 py-1 rounded-[3rem] border border-neutral-100">
              <motion.button
                className="flex w-fit"
                onClick={() =>
                  setCurrentImage(
                    (previousImage) => (previousImage - 1) % srcList.length
                  )
                }
              >
                <PiCaretCircleLeftFill />
              </motion.button>
              <motion.button
                className="flex w-fit"
                onClick={() =>
                  setCurrentImage(
                    (previousImage) => (previousImage + 1) % srcList.length
                  )
                }
              >
                <PiCaretCircleRightFill />
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  );
};

export default PortraitCarousel;
