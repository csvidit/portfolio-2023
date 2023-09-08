"use client";

import { MotionConfig, motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { useRef } from "react";

const ProjectItem = (props: {
  title: string;
  href: string;
  children: React.ReactNode;
  icons: React.ReactNode;
}) => {
  const ref = useRef(null);

  const mainDivVariants = {
    initial: {
      backgroundColor: "#171717",
      color: "#737373",
      scale: 1,
    },
    hover: {
      backgroundColor: "#2e1065",
      color: "#c4b5fd",
      scale: 0.95,
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
      <motion.a
        ref={ref.current}
        href={props.href}
        target="_blank"
        variants={mainDivVariants}
        initial="initial"
        whileHover="hover"
        className="flex flex-col justify-between space-y-4 col-span-2 rounded-[3rem] p-8 lg:p-12"
      >
        <motion.div className="flex flex-col space-y-4 justify-start items-start w-full">
          <motion.div variants={titleVariants} className="text-2xl lg:text-4xl">
            {props.title}
          </motion.div>
          <motion.div className="lg:text-xl text-left">
            {props.children}
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-col space-y-4 justify-start items-start w-full">
          <motion.div className="w-full flex flex-row items-center justify-between">
            {props.icons}
            <motion.div variants={arrowVariants} className="flex">
              <BsArrowUpRight />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.a>
    </MotionConfig>
  );
};

export default ProjectItem;
