"use client";

import { motion } from "framer-motion";

const OTWGridStyle = () => {
  return (
    <motion.div
      animate={{
        background: [
          "conic-gradient( from 0deg, #0a0a0a 60%, #6ee7b7)",
          "conic-gradient( from 360deg, #0a0a0a 60%, #6ee7b7)",
        ],
        transition: {
          duration: 2,
          type: "tween",
          ease: "linear",
        },
      }}
      className="rounded-[3rem] p-[1px] col-span-4 row-span-1"
    >
      <div className="rounded-[3rem] w-full h-full flex flex-row p-8 py-6 lg:p-12 lg:py-8 bg-gradient-to-tl from-neutral-950 via-neutral-950 to-emerald-950">
        <div className="flex flex-row space-x-2 items-center">
          <div
            style={{ boxShadow: "0px 0px 6px 6px rgba(16,185,129,0.3)" }}
            className="w-2 h-2 rounded-full bg-emerald-500 aspect-square"
          />
          <div className="flex flex-row space-x-2 items-center"></div>
          <div className="text-emerald-500">Open To Work</div>
          <div className="hidden lg:flex text-neutral-100">
            Entry-level Software Engineer, Web Developer, UI Engineer positions
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OTWGridStyle;
