"use client";

import { tags } from "./Filters";
import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
} from "framer-motion";
import { useState } from "react";
import { PiCaretDown } from "react-icons/pi";
import PaperFilterItems from "./PaperFilterItems";

const PaperFiltersMobile = (props: { activeFilter: number }) => {
  const [open, setOpen] = useState(false);

  return (
    <MotionConfig
      transition={{
        type: "spring",
        duration: 0.2,
        stiffness: 200,
        damping: 20,
      }}
    >
      <AnimatePresence mode="sync">
        <LayoutGroup>
          <AnimatePresence mode="sync">
            <motion.div
              layout
              layoutRoot
              className={`flex flex-col space-y-8 justify-between rounded-[3rem] p-8 lg:p-12 bg-neutral-900 `}
            >
              <motion.button
                layout
                className={`w-fit px-2 py-1 flex flex-row space-x-1 items-center bg-neutral-950 hover:bg-neutral-900 border transition-all duration-200 ease-in-out rounded-md uppercase text-base text-red-500 border-red-500 hover:text-red-500 hover:border-red-400
        `}
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <motion.span>{tags[props.activeFilter]}</motion.span>
                <motion.span
                  animate={{ rotate: open ? "180deg" : "0deg" }}
                  layout
                >
                  <PiCaretDown />
                </motion.span>
              </motion.button>

              <AnimatePresence mode="sync">
                {open && (
                  <motion.menu
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ staggerChildren: 0.1 }}
                    layout
                    className="col-span-4 bg-neutral-900 flex flex-col gap-2"
                  >
                    <LayoutGroup>
                      <PaperFilterItems activeFilter={props.activeFilter} />
                    </LayoutGroup>
                  </motion.menu>
                )}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </LayoutGroup>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default PaperFiltersMobile;
