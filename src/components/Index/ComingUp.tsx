"use client";

import { motion } from "framer-motion";
import MainGridItem from "../MainGridItem";
import ActionButton from "./ActionButton";

const ComingUp = () => {
  return (
    <MainGridItem width={2} height={1}>
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
        <ActionButton external={true} size="fit" variant="plain" href={"https://snippetopia.xyz"}>Check out Snippetopia</ActionButton>
      </motion.div>
      {/* <ActionButton
        size="full"
        external={true}
        variant="spotlight"
        href="https://github.com/csvidit/squawk"
      >
        <motion.div layout className="flex flex-row space-x-2 items-center">
          <motion.div>Squawk Social on</motion.div> <BsGithub />
        </motion.div>
      </ActionButton> */}
    </MainGridItem>
  );
};

export default ComingUp;
