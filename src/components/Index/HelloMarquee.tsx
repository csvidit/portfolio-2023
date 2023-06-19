'use client'

import { motion } from "framer-motion";

const HelloMarquee = () => {
  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };
  return (
    <motion.div className="col-span-2 w-100 h-100 flex flex-col space-y-8 rounded-[3rem] p-8 lg:p-12 bg-neutral-900 overflow-hidden">
       <motion.div
        variants={marqueeVariants}
        animate="initial"
        className="flex flex-row items-center space-x-4 w-full"
      >
         <motion.div className="flex flex-row justify-between items-center space-x-4 w-full text-4xl lg:text-6xl">
          <motion.div className="flex geom grow">Hello</motion.div>
        </motion.div>
        <motion.div className="flex flex-row justify-between items-center space-x-4 w-full text-4xl lg:text-6xl">
          <motion.div className="flex geom grow">Hello</motion.div>
        </motion.div>
        <motion.div className="flex flex-row justify-between items-center space-x-4 w-full text-4xl lg:text-6xl">
          <motion.div className="flex geom grow">Hello</motion.div>
        </motion.div>
        <motion.div className="flex flex-row justify-between items-center space-x-4 w-full text-4xl lg:text-6xl">
          <motion.div className="flex geom grow">Hello</motion.div>
        </motion.div>
        <motion.div className="flex flex-row justify-between items-center space-x-4 w-full text-4xl lg:text-6xl">
          <motion.div className="flex geom grow">Hello</motion.div>
        </motion.div>
        <motion.div className="flex flex-row justify-between items-center space-x-4 w-full text-4xl lg:text-6xl">
          <motion.div className="flex geom grow">Hello</motion.div>
        </motion.div>
        <motion.div className="flex flex-row justify-between items-center space-x-4 w-full text-4xl lg:text-6xl">
          <motion.div className="flex geom grow">Hello</motion.div>
        </motion.div>
        <motion.div className="flex flex-row justify-between items-center space-x-4 w-full text-4xl lg:text-6xl">
          <motion.div className="flex geom grow">Hello</motion.div>
        </motion.div>
        <motion.div className="flex flex-row justify-between items-center space-x-4 w-full text-4xl lg:text-6xl">
          <motion.div className="flex geom grow">Hello</motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HelloMarquee;
