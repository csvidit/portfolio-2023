"use client";

import { motion } from "framer-motion";

const ProjectsTitle = () => {
  return (
    <motion.div className="col-span-4 rounded-[3rem] p-8 lg:p-12 bg-neutral-900 text-violet-500 text-4xl lg:text-6xl">
      <motion.div className="geom">Projects</motion.div>
    </motion.div>
  );
};

export default ProjectsTitle;
