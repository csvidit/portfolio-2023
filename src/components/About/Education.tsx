"use client";

import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div className="lg:col-span-2 row-span-2 w-100 h-100 flex flex-col space-y-8 rounded-[3rem] p-8 lg:p-12 bg-neutral-900">
      <motion.div
        layout
        className="flex geom grow text-4xl lg:text-6xl text-red-500"
      >
        academics
      </motion.div>
      <motion.div
        layout
        className="flex flex-col space-y-1 font-light flex-wrap "
      >
        <motion.div className="text-xl lg:text-2xl">
            DePauw University
        </motion.div>
        <motion.div className="text-neutral-500">
            BA, Computer Science + Economics minor
        </motion.div>
        <motion.div className="text-neutral-500">
            Aug 2019 - May 2023
        </motion.div>
      </motion.div>
      <motion.div
        layout
        className="flex flex-col space-y-1 font-light flex-wrap "
      >
        <motion.div className="text-xl lg:text-2xl">
            New College, University of Oxford
        </motion.div>
        <motion.div className="text-neutral-500">
            Visiting Student, International Business and Creative Writing
        </motion.div>
        <motion.div className="text-neutral-500">
            Sep 2022 - Dec 2022
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Education;
