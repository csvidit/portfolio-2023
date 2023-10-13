"use client";

import { MotionConfig, motion } from "framer-motion";
import { BsArrowRight, BsDot } from "react-icons/bs";
import { useRef } from "react";
import Link from "next/link";

export const secondaryTags = [["All"],["All", "Poem", "Short Story"], ["All", "Web Development"]];

export type Writing = {
  description: string;
  internalSlug: string;
  primaryTag: number;
  secondaryTag: number;
  publishDate: string;
  title: string;
  text: {
    html: string;
  };
};

const WritingItem = (props: {
  type: string;
  title: string;
  href: string;
  children: React.ReactNode;
  primaryTag: number;
  secondaryTag: number;
  date: string;
}) => {
  const ref = useRef(null);

  const mainDivVariants = {
    initial: {
      backgroundColor: "#171717",
      color: "#737373",
      scale: 1,
    },
    hover: {
      backgroundColor: props.type == "literature" ? "#1e1b4b" : "#172554",
      color: props.type == "literature" ? "#a5b4fc" : "#93c5fd",
      scale: 0.95,
    },
  };

  const titleVariants = {
    initial: { color: "#fef2f2" },
    hover: { color: props.type == "literature" ? "#e0e7ff" : "#dbeafe" },
  };

  const arrowVariants = {
    initial: { color: "#f5f5f5" },
    hover: { color: "#eab308" },
  };

  const tagVariants = {
    initial: {
      backgroundColor: props.type == "literature" ? "#0a0a0a" : "#172554",
      color: "#737373",
      borderWidth: "1px",
      borderColor: "#171717",
    },
    hover: {
      backgroundColor: "#1e1b4b",
      color: props.type == "literature" ? "#a5b4fc" : "#93c5fd",
      borderWidth: "1px",
      borderColor: props.type == "literature" ? "#a5b4fc" : "#93c5fd",
    },
  };

  const date = new Date(props.date);
  let dateString = date.toDateString();
  dateString = dateString.substring(dateString.indexOf(" "));

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
        <Link
          href={props.href}
          target="_blank"
          className="flex flex-col justify-between space-y-4 w-full h-full p-8 lg:p-12"
        >
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
          <motion.div className="w-full flex flex-row items-center justify-between">
            <motion.div className="flex flex-row space-x-2 flex-wrap items-center text-neutral-500 text-xs uppercase">
              <motion.span
                variants={tagVariants}
                className="px-2 py-1 bg-neutral-950 rounded-md"
              >
                {props.primaryTag == 0 ? "" : secondaryTags[props.primaryTag][props.secondaryTag]}
              </motion.span>
              <BsDot className="lg:flex hidden" />
              <motion.span variants={titleVariants}>
                {dateString}
              </motion.span>
            </motion.div>
            <motion.div
              variants={arrowVariants}
              className="flex flex-row space-x-1 items-center"
            >
              <BsArrowRight />
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>
    </MotionConfig>
  );
};

export default WritingItem;
