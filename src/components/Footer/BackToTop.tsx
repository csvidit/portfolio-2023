"use client";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import Link from "next/link";
import { BsArrowUp } from "react-icons/bs";

const BackToTop = (props: {}) => {
  const colors = {
    dark: "#171717",
    gray: "#525252",
    light: "#f5f5f5",
    yellow: "#eab308",
    blue: "#3b82f6",
    red: "#ef4444",
    sky: "#0ea5e9",
  };

//   const variant: String = "plain";
  const color = colors.light;
  const backgroundColor = "transparent";

  const mainDivVariants = {
    initial: {
      color: color,
      backgroundColor: backgroundColor,
      borderColor: colors.gray,
    },
    hover: {
      color: color,
      backgroundColor: backgroundColor,
      borderColor: color,
    },
  };

  const textVariants1 = {
    initial: {
      display: "flex",
      opacity: 1,
      translateY: "0%",
    },
    hover: {
      display: "none",
      opacity: 0,
      translateY: "-100%",
    },
  };
  const textVariants2 = {
    initial: {
      display: "none",
      opacity: 0,
      translateY: "+100%",
    },
    hover: {
      display: "flex",
      opacity: 1,
      translateY: "0%",
    },
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
      <button onClick={() => window.scrollTo(0, 0)} className={`flex bg-opacity-100 w-fit`}>
        <motion.div
          variants={mainDivVariants}
          initial="initial"
          whileHover="hover"
          layout
          className={`group w-fit h-full py-1 flex flex-row items-center group justify-start space-x-4 text-base border-b overflow-hidden font-light`}
        >
          <motion.div className="flex flex-col overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div layout variants={textVariants1} className="flex">
                back to top
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              <motion.div layout variants={textVariants2} className="flex">
                back to top
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <motion.div
            variants={textVariants1}
            layout
            className={`flex flex-row items-center space-x-2`}
          >
            <BsArrowUp/>
          </motion.div>
          <motion.div
            variants={textVariants2}
            layout
            className={`flex flex-row items-center space-x-2`}
          >
            <BsArrowUp />
          </motion.div>
        </motion.div>
      </button>
    </MotionConfig>
  );
};

export default BackToTop;
