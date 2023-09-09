"use client";

import { MotionConfig, motion } from "framer-motion";
import { BsArrowUpRight, BsDot } from "react-icons/bs";
import { useRef } from "react";

`
    query Papers {
      papers(orderBy: publishedAt_DESC, where: { toShow: true }) {
        abstract
        internalSlug
        publishDate
        tag
        title
        document {
          fileName
          url
        }
      }
    }
  `

export const tags = [
  "All",
  "Development Economics",
  "International Business",
  "International Finance",
];

const PaperItem = (props: {
  title: string;
  href: string;
  children: React.ReactNode;
  tag: number;
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
      backgroundColor: "#450a0a",
      color: "#fca5a5",
      scale: 0.95,
    },
  };

  const titleVariants = {
    initial: { color: "#fef2f2" },
    hover: { color: "#fee2e2" },
  };

  const arrowVariants = {
    initial: { color: "#f5f5f5" },
    hover: { color: "#eab308" },
  };

  const tagVariants = {
    initial: {
      backgroundColor: "#0a0a0a",
      color: "#737373",
      borderWidth: "1px",
      borderColor: "#171717",
    },
    hover: {
      backgroundColor: "#450a0a",
      color: "#fca5a5",
      borderWidth: "1px",
      borderColor: "#fca5a5",
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
      <motion.a
        ref={ref.current}
        href={props.href}
        variants={mainDivVariants}
        initial="initial"
        whileHover="hover"
        className="flex flex-col space-y-4 justify-between items-center col-span-2 rounded-[3rem] p-8 lg:p-12 font-light"
      >
        <motion.div className="flex flex-col space-y-4 justify-start items-start w-full">
          <motion.div variants={titleVariants} className="text-2xl lg:text-4xl">
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
              {props.tag == 0 ? "" : tags[props.tag]}
            </motion.span>
            <BsDot className="lg:flex hidden" />
            <motion.span variants={titleVariants} className="text-red-500">
              {dateString}
            </motion.span>
          </motion.div>
          {/* <motion.div className="flex flex-wrap space-x-1 items-center w-fit text-xs">
            <motion.span
              variants={tagVariants}
              className="px-2 py-1 bg-neutral-950 rounded-md uppercase"
            >
              {props.tag == 0 ? "" : tags[props.tag]}
            </motion.span>
          </motion.div> */}
          <motion.div variants={arrowVariants} className="flex">
            <BsArrowUpRight />
          </motion.div>
        </motion.div>
      </motion.a>
    </MotionConfig>
  );
};

export default PaperItem;
