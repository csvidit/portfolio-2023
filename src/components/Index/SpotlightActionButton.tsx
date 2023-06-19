"use client";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useMediaQuery } from "react-responsive";
import { UrlObject } from "url";

const SpotlightActionButton = (props: {
  children: React.ReactNode;
  href: string | UrlObject;
}) => {
  const [hover, setHover] = useState(false);

  const buttonVariants = {
    initial: { backgroundColor: "#171717", color: "#eab308" },
    hover: { backgroundColor: "#eab308", color: "#171717" },
  };

  const isBigScreen = useMediaQuery({ query: "(min-width: 1001px)" });

  return (
    <Link href={props.href} className={`flex group`}>
      <motion.div
        layout
        // whileHover={{ backgroundColor: "#eab308", color: "#171717" }}
        transition={{
          type: "spring",
          duration: 0.2,
          damping: 20,
          stiffness: 200,
        }}
        onHoverStart={(e) => {
          setHover(true);
        }}
        onHoverEnd={(e) => {
          setHover(false);
        }}
        className={`group-hover:bg-neutral-900 group-hover:text-yellow-500 border border-neutral-600 rounded-[3rem] w-full h-full px-4 py-2 flex flex-row items-center group justify-between space-x-4 font-light text-xl lg:text-2xl`}
      >
        <AnimatePresence mode="popLayout">
          {hover && (
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                type: "spring",
                duration: 0.3,
              }}
              layout
              // layoutId="cta-arrow"
              className={`flex`}
            >
              <BsArrowUpRight />
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div layout className="">
          {props.children}
        </motion.div>
        <AnimatePresence mode="popLayout">
          {!hover && (
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{
                type: "spring",
                duration: 0.3,
              }}
              layout
              // layoutId="cta-arrow"
              className={`flex`}
            >
              <BsArrowUpRight />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

export default SpotlightActionButton;
