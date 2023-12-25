"use client";

import { motion } from "framer-motion";
import MainGridItem from "../MainGridItem";
import SecondaryButton from "../SecondaryButton";

const ComingUp = () => {
  return (
    <MainGridItem width={2} height={1}>
      <motion.div className="flex flex-col space-y-8">
        <motion.div className="flex flex-row space-x-4 items-baseline">
          <motion.h2 className="text-4xl lg:text-6xl text-indigo-500">
            currently building
          </motion.h2>
        </motion.div>
        <motion.div
          // variants={textVariants}
          className="font-light lg:text-2xl text-left line-gap"
        >
          <SecondaryButton
            plain
            variant="indigo"
            href="https://snippetopia.xyz"
          >
            Snippetopia
          </SecondaryButton>
          , a collection of free React, Next.js, TailwindCSS, and Framer Motion
          snippets and templates made from scratch by me, and{" "}
          <SecondaryButton
            plain
            variant="indigo"
            href="https://lume.viditkhandelwal.com"
          >
            Lume
          </SecondaryButton>
          , a collection of premium wallpapers and digital assets.
        </motion.div>
      </motion.div>
    </MainGridItem>
  );
};

export default ComingUp;
