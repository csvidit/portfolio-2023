"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const FooterIconLink = (props: {
  index: number;
  children: React.ReactNode;
  href: string;
  label: string;
  hoveredLinkId: any;
  setHoveredLinkId: any;
  className?: string;
}) => {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={props.href}
      rel="noreferrer noopener"
      target={props.href.startsWith("https") ? "_blank" : "_self"}
      className={`text-neutral-500 hover:text-neutral-100 transition-all duration-200 ease-in-out text-lg lg:text-2xl ${props.className}`}
    >
      <motion.div
        onHoverStart={() => {
          setHover(true);
          props.setHoveredLinkId(props.index);
        }}
        onHoverEnd={() => {
          setHover(false);
          props.setHoveredLinkId(null);
        }}
        layout
        className="p-1 lg:p-2 relative flex flex-row items-center"
      >
        <motion.span layout className="z-20">
          {props.children}
        </motion.span>
        <AnimatePresence>
          {props.hoveredLinkId == props.index && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              layout
              layoutId="footer-link-hover-bg"
              className="absolute left-0 self-center justify-center w-full h-full bg-neutral-700 border border-neutral-600 rounded-md"
            ></motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {props.hoveredLinkId == props.index && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              layout
              layoutId="footer-link-hover-tooltip"
              className="absolute bottom-full left-0 mb-2 p-1 self-center justify-center w-fit h-fit bg-white text-neutral-900 rounded-md text-xs font-medium"
            >
              {props.label}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

export default FooterIconLink;
