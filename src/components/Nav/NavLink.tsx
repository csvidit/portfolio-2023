"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { UrlObject } from "url";

const NavLink = (props: {
  key: string;
  href: string | UrlObject;
  children: React.ReactNode;
  current?: boolean;
  icon: React.ReactNode;
}) => {

  const [hover, setHover] = useState(false);

  const mainDivVariants = {
    initial: { opacity: 1 },
    hover: { opacity: 1, ring: "2px", ringOffset: "1px"},
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
      <motion.li
      // style={{shadow: "0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.15)"}}
        key={props.key}
        variants={mainDivVariants}
        initial="initial"
        whileHover="hover"
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        layout
        className={`grid-cols-1 w-full h-fit border group transition-all ease-in-out duration-300 rounded-xl ${
          props.current == true
            ? "border-lime-500 hover:border-lime-300"
            : "border-neutral-800 hover:border-neutral-600"
        } hover:shadow-inner hover:shadow-neutral-800`}
      >
        <Link
          href={props.href}
          className={`p-4 flex flex-col space-y-1 items-center w-full h-full relative overflow-hidden ${
            props.current == true ? "text-lime-500" : "text-neutral-100"
          }`}
        >
          <motion.div layout className={``}>
            {props.icon}
          </motion.div>

          <motion.div className="flex flex-col overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.div variants={textVariants1} className="flex">
                {props.children}
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
              <motion.div variants={textVariants2} className="flex">
                {props.children}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </Link>
      </motion.li>
    </MotionConfig>
  );
};

export default NavLink;
