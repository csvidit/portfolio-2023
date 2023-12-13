"use client";

import { MotionConfig, motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

const FeaturedProjectItem = (props: {
  title: string;
  href: string;
  children: React.ReactNode;
  icons: React.ReactNode;
}) => {
  const parentDivVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 0.95,
    },
  };

  const mainDivVariants = {
    initial: {
      backgroundColor: "#171717",
      scale: 1,
    },
    hover: {
      backgroundColor: "#2e1065",
      scale: 1,
    },
  };

  const titleVariants = {
    initial: { color: "#f5f5f5" },
    hover: { color: "#ede9fe" },
  };

  const arrowVariants = {
    initial: { color: "#f5f5f5" },
    hover: { color: "#eab308" },
  };

  return (
    <MotionConfig
      transition={{
        type: "spring",
        duration: 0.2,
        damping: 20,
        stiffness: 200,
      }}
    >
      <motion.div
        variants={parentDivVariants}
        initial="initial"
        whileHover="hover"
        animate={{
          background: [
            "conic-gradient( from 0deg, #0a0a0a 60%, #8b5cf6)",
            "conic-gradient( from 360deg, #0a0a0a 60%, #8b5cf6)",
          ],
          transition: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 4,
            type: "tween",
            ease: "linear",
          },
        }}
        className="relative col-span-2 row-span-2 rounded-[3rem] p-[1px]"
      >
        <motion.a
          href={props.href}
          target="_blank"
          variants={mainDivVariants}
          className="rounded-[3rem] p-8 lg:p-12 font-normal w-full h-full flex flex-col justify-between space-y-4 bg-gradient-to-br from-neutral-950 via-neutral-950 to-violet-950 bg-opacity-[60%]"
        >
          <motion.div className="flex flex-col space-y-4 justify-start items-start w-full overflow-hidden">
            <motion.div
              variants={titleVariants}
              className="text-2xl lg:text-4xl"
            >
              {props.title}
            </motion.div>
            <motion.div className="lg:text-xl text-left text-violet-300">
              {props.children}
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-col space-y-4 justify-start items-start w-full">
            <motion.div className="w-full flex flex-col space-y-4 text-violet-300">
              {props.icons}
              <motion.div
                variants={arrowVariants}
                className="font-normal flex flex-row space-x-2 items-center"
              >
                <span>Detailed README on Github</span>
                <BsArrowUpRight />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.a>
      </motion.div>
    </MotionConfig>
  );
};

export default FeaturedProjectItem;
