"use client";

import { motion } from "framer-motion";

const OTW3 = () => {
  return (
    <div
      style={{
        background:
          "conic-gradient( from 0deg, #022c22, #a7f3d0, #10b981, #059669, #047857, #065f46, #34d399, #6ee7b7)",
      }}
      className="rounded-[3rem] p-[0.5px]"
    >
      <div className="rounded-[3rem] w-full h-full flex flex-row px-4 py-2 bg-neutral-950">
        <div className="text-sm flex flex-row space-x-2 items-center">
          <motion.div
            animate={{
              boxShadow: [
                "0px 0px 2px 2px rgba(16,185,129,0.3)",
                "0px 0px 6px 6px rgba(16,185,129,0.3)",
              ],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 2,
              type: "tween",
            }}
            className="w-2 h-2 rounded-full bg-emerald-500 aspect-square"
          />
          <div className="flex flex-row space-x-2 items-center"></div>
          <div className="text-emerald-500">Open To Work</div>
          <div className="hidden lg:flex text-neutral-100">
            Entry-level Software Engineer, Web Developer, UI Engineer positions
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTW3;
