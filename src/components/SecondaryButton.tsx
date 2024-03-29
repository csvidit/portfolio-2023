"use client";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";

const SecondaryButton = (props: {
  children: React.ReactNode;
  href: string;
  variant: string;
  external?: boolean;
  noArrow?: boolean;
  plain?: boolean;
  className?: string;
}) => {
  const n = 100;
  const colors = {
    extraDark: "#0a0a0a", 
    dark: "#171717",
    gray: "#525252",
    light: "#f5f5f5",
    yellow: "#eab308",
    blue: "#3b82f6",
    red: "#ef4444",
    sky: "#0ea5e9",
    indigo: "#6366f1",
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
    case "index":
    case "indigo":
      color = colors.indigo;
      break;
    case "academic":
      color = colors.red;
  }
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
        type: "tween",
        duration: 0.2,
      }}
    >
      <Link
        href={props.href}
        className={`inline-flex bg-opacity-100 w-fit ${props.className}`}
      >
        <motion.div
          variants={mainDivVariants}
          initial="initial"
          whileHover="hover"
          layout
          className={`group w-fit h-fit py-1 flex flex-row items-center group justify-start space-x-4 overflow-hidden font-light ${props.plain ? "" : "border-b"}`}
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
          {!props.noArrow && (
            <motion.div
              variants={textVariants1}
              layout
              className={`flex flex-row items-center space-x-2`}
            >
              {props.href.startsWith("http") || props.href.startsWith("https") ? <BsArrowUpRight /> : <BsArrowRight />}
            </motion.div>
          )}
          {!props.noArrow && (
            <motion.div
              variants={textVariants2}
              layout
              className={`flex flex-row items-center space-x-2`}
            >
              {props.href.startsWith("http") || props.href.startsWith("https") ? <BsArrowUpRight /> : <BsArrowRight />}
            </motion.div>
          )}
        </motion.div>
      </Link>
    </MotionConfig>
  );
};

export default SecondaryButton;
