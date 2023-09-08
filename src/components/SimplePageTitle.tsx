"use client";

import { motion } from "framer-motion";

const SimplePageTitle = (props: {children: React.ReactNode, color: string}) => {
  return (
    <motion.div className={`col-span-4 rounded-[3rem] p-8 lg:p-12 h-max bg-transparent ${props.color} text-4xl lg:text-6xl`}>
      <motion.h1 className="geom">{props.children}</motion.h1>
    </motion.div>
  );
};

export default SimplePageTitle;
