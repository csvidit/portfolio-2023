"use client";

import { motion } from "framer-motion";

const ExperienceHeader = () => {
  return (
    <motion.div className="col-span-4 row-span-1 flex flex-row items-center rounded-[3rem] p-8 lg:p-12 bg-neutral-900 text-blue-500 text-4xl lg:text-6xl">
      <motion.div className="geom">work experience</motion.div>
    </motion.div>
  );
};

export default ExperienceHeader;
