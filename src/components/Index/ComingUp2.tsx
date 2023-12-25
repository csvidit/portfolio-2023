"use client";

import { motion } from "framer-motion";
import MainGridItem from "../MainGridItem";
import ActionLink from "../ActionLink";

const ComingUp2 = () => {
  return (
    <MainGridItem width={2} height={1} className="bg-gradient-to-br from-neutral-950 from-80% to-indigo-950 shadow-inner shadow-indigo-950 border border-neutral-950">
      <motion.div className="flex flex-col space-y-8">
        <motion.div className="flex flex-row space-x-4 items-baseline">
          <motion.h2 className="text-4xl lg:text-6xl text-indigo-500">currently building</motion.h2>
        </motion.div>
        <motion.div
          // variants={textVariants}
          className="font-light lg:text-2xl text-left line-gap"
        >
         A collection of free React, Next.js, TailwindCSS, and Framer Motion snippets and templates made from scratch by me.
        </motion.div>
        <ActionLink size="fit" variant="plain" href={"https://snippetopia.xyz"}>Check out Snippetopia</ActionLink>
      </motion.div>
     
    </MainGridItem>
  );
};

export default ComingUp2;
