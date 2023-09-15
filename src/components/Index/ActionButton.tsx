"use client";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { UrlObject } from "url";

const ActionButton = (props: {
  children: React.ReactNode;
  href: string | UrlObject;
  variant: string; // can be regular, spotight, experience, academic.
  external: boolean;
  className?: string;
  size: string; // full or fit
}) => {
  const n = 100;
  const colors = {
    dark: "#171717",
    gray: "#525252",
    light: "#f5f5f5",
    yellow: "#eab308",
    blue: "#3b82f6",
    red: "#ef4444",
    sky: "#0ea5e9",
  };

  let color;
  const backgroundColor = colors.dark;
  switch (props.variant) {
    case "plain":
      color = colors.light;
      break;
    case "regular":
      color = colors.sky;
      break;
    case "spotlight":
      color = colors.yellow;
      break;
    case "experience":
      color = colors.blue;
      break;
    case "academic":
      color = colors.red;
  }
  const mainDivVariants = {
    initial: {
      color: color,
      backgroundColor: backgroundColor,
      borderColor: colors.gray,
      scale: 1,
    },
    hover: {
      color: backgroundColor,
      backgroundColor: color,
      borderColor: color,
      scale: 1.05,
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
      <Link
        target={props.external ? "_blank" : ""}
        href={props.href}
        className={`flex bg-opacity-100 w-${props.size} ${props.className}`}
      >
        <motion.div
          variants={mainDivVariants}
          initial="initial"
          whileHover="hover"
          layout
          className={`group w-${props.size} h-full px-4 py-2 flex flex-row items-center group justify-between space-x-4 text-xl lg:text-2xl border rounded-[3rem] overflow-hidden font-light`}
        >
          <motion.div className="flex flex-col overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div layout variants={textVariants1} className="flex">
                {props.children}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              <motion.div layout variants={textVariants2} className="flex">
                {props.children}
              </motion.div>
            </AnimatePresence>
          </motion.div>
          <motion.div
            variants={textVariants1}
            layout
            className={`flex flex-row items-center space-x-2`}
          >
            {props.external == true ? <BsArrowUpRight /> : <BsArrowRight />}
          </motion.div>
          <motion.div
            variants={textVariants2}
            layout
            className={`flex flex-row items-center space-x-2`}
          >
            {props.external == true ? <BsArrowUpRight /> : <BsArrowRight />}
          </motion.div>
        </motion.div>
      </Link>
    </MotionConfig>
  );
};

export default ActionButton;
