"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import ContactButton from "./ContactButton";
import { useState } from "react";

const GitHub = () => {
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
    href="https://github.com/csvidit"
      onHoverStart={() => {
        setHover(true);
      }}
      onHoverEnd={() => {
        setHover(false);
      }}
      initial="initial"
      whileHover="hover"
      variants={mainDivVariants}
      className="col-span-1 lg:col-span-2 justify-center flex flex-col space-y-8 row-span-1 rounded-[3rem] p-8 lg:p-12 bg-neutral-100 text-neutral-900 overflow-hidden"
    >
      <motion.div
        variants={marqueeVariants}
        className="flex flex-row items-center space-x-4 w-full"
      >
        <motion.div className="flex flex-row justify-between items-center space-x-4 w-full text-4xl lg:text-6xl">
          <motion.div className="flex geom grow">GitHub</motion.div>
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
              <motion.div key={i} className="flex flex-row justify-between items-center space-x-4 w-full text-4xl lg:text-6xl">
                <motion.div className="flex geom grow">GitHub</motion.div>
                <BsArrowUpRight className="flex text-4xl lg:text-6xl" />
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.a>
  );
};

export default GitHub;
