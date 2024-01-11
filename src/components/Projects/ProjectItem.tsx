"use client";

import { MotionConfig, motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { useRef } from "react";
import Link from "next/link";

const ProjectItem = (props: {
  title: string;
  href: string;
  children: React.ReactNode;
  icons: React.ReactNode;
}) => {
  const ref = useRef(null);

  const mainDivVariants = {
    initial: {
      // borderWidth: "1px",
      // borderColor: "#262626",
      backgroundColor: "#171717",
      // backgroundImage: "linear-gradient(to bottom right, rgb(23, 23, 23) 0%, rgb(23, 23, 23) 100%)",
      color: "#737373",
      scale: 1,
    },
    hover: {
      // borderWidth: "1px",
      // borderColor: "#5b21b6",
      // boxShadow: "inset 0px 0px 16px 0 #5b21b6",
      backgroundColor: "#2e1065",
      // backgroundImage: "linear-gradient(to bottom right, rgb(10, 10, 10) 0%, rgb(46, 16, 101) 100%)",
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
      <motion.div
        ref={ref.current}
        variants={mainDivVariants}
        initial="initial"
        whileHover="hover"
        className="col-span-2 rounded-[3rem]"
      >
        <Link href={props.href} target="_blank" className="flex flex-col justify-between space-y-4 w-full h-full p-8 lg:p-12">
          <motion.div className="flex flex-col space-y-4 justify-start items-start w-full">
            <motion.div
              variants={titleVariants}
              className="text-2xl lg:text-4xl"
            >
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
        </Link>
      </motion.div>
    </MotionConfig>
  );
};

export default ProjectItem;
