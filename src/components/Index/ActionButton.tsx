"use client";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { HiArrowSmallRight } from "react-icons/hi2";
import { useMediaQuery } from "react-responsive";
import { UrlObject } from "url";

const ActionButton = (props: {children: React.ReactNode, href: string | UrlObject}) => {
  const [hover, setHover] = useState(false);

  const isBigScreen = useMediaQuery({ query: "(min-width: 1001px)" });

  
    return (
      <Link
        href="/about"
        className={`flex rounded-[3rem] bg-opacity-100 border border-neutral-600`}
      >
        <motion.div
          layout
          transition={{
            type: "spring",
            duration: 0.2,
          }}
          onHoverStart={(e) => {
            setHover(true);
          }}
          onHoverEnd={(e) => {
            setHover(false);
          }}
          className={`w-full h-full px-4 py-2 flex flex-row items-center group justify-between space-x-4 text-xl lg:text-2xl`}
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
                <HiArrowSmallRight />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div layout className="font-light">
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
                <HiArrowSmallRight />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Link>
    );
};

export default ActionButton;
