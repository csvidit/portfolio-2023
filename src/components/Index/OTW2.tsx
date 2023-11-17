"use client"

import { PiBriefcaseDuotone } from "react-icons/pi";
import { motion } from "framer-motion";

const OTW2 = () => {
  return (
    <div className="group w-fit p-[1px] h-fit rounded-full bg-gradient-radial from-neutral-950 to-emerald-200 from-60% inline-flex items-center space-x-1">
      <div className="rounded-full px-4 py-2 bg-neutral-900 inline-flex items-center space-x-1">
        <div className="inline-flex flex-row space-x-1 items-center w-fit text-emerald-500">
          <PiBriefcaseDuotone />
          <span className="inline">Open To Work</span>
        </div>
        <span className="text-neutral-300 hidden lg:inline w-fit capitalize">
          Entry-level Software Engineer, Web Developer, UI Engineer positions
        </span>
      </div>
    </div>
  );
};

export default OTW2;
