"use client";

import { motion } from "framer-motion";

const EducationItem = (props: { children: React.ReactNode }) => {
  return (
    <motion.div
      layout
      className="flex flex-col space-y-1 font-light flex-wrap "
    >
      {props.children}
    </motion.div>
  );
};

export default EducationItem;