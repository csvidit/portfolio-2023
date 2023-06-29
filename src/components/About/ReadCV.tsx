"use client";

import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { useState } from "react";

const ReadCV = () => {
  const n = 100;

  const [hover, setHover] = useState(false);

  const mainDivVariants = {
    initial: {
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.2,
        damping: 20,
        stiffness: 200,
      },
    },
    hover: {
      scale: 0.95,
      backgroundColor: "#a5b4fc",
      color: "#1e1b4b",
      transition: {
        type: "spring",
        duration: 0.2,
        damping: 20,
        stiffness: 200,
      },
    },
  };

  const marqueeVariants = {
    hover: {
      x: [0, -10350],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        },
      },
    },
  };
  return (
    <motion.a
    target="_blank"
      href="https://read.cv/viditkhandelwal"
      onHoverStart={() => {
        setHover(true);
      }}
      onHoverEnd={() => {
        setHover(false);
      }}
      initial="initial"
      whileHover="hover"
      variants={mainDivVariants}
      className="lg:col-span-2 row-span-1 justify-center flex flex-col space-y-8 rounded-[3rem] p-8 lg:p-12 bg-neutral-900 text-neutral-100 overflow-hidden"
    >
      <motion.div
        variants={marqueeVariants}
        className="flex flex-row items-center space-x-4 w-full"
      >
        <motion.div className="flex flex-row justify-between items-center space-x-4 w-full text-4xl lg:text-6xl">
          <motion.div className="flex geom grow">read.cv</motion.div>
          <BsArrowUpRight className="flex text-4xl lg:text-6xl" />
        </motion.div>
        {/* {[...Array(n)].map((e, i) => (
          <motion.div
            key={i}
            className="flex flex-row justify-between items-center space-x-4 w-full text-4xl lg:text-6xl"
          >
            <motion.div className="flex geom grow">GitHub</motion.div>
            <BsArrowUpRight className="flex text-4xl lg:text-6xl" />
          </motion.div>
        ))} */}
        {hover && (
          <motion.div className="flex flex-row items-center space-x-4 w-full">
            {[...Array(n)].map((e, i) => (
              <motion.div
                key={i}
                className="flex flex-row justify-between items-center space-x-4 w-full text-4xl lg:text-6xl"
              >
                <motion.div className="flex geom grow">read.cv</motion.div>
                <BsArrowUpRight className="flex text-4xl lg:text-6xl" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.a>
  );
};

export default ReadCV;
