"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { useRouter } from "next/navigation";
import ActionButton from "./ActionButton";
import MainGridItem from "../MainGridItem";

const Spotlight = () => {
  return (
   <MainGridItem width={2} height={1}>
      <motion.div className="flex flex-col space-y-8">
        <motion.div className="flex flex-row space-x-4 items-center">
          <motion.div
            animate={{ rotateX: 15, rotateZ: -15 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              width={50}
              height={50}
              alt="3D Star"
              src="/star-front-premium.png"
            />
          </motion.div>

          <motion.h2 className="text-4xl lg:text-6xl geom">spotlight</motion.h2>
        </motion.div>

        <motion.div
          // variants={textVariants}
          className="font-light text-xl lg:text-2xl text-left line-gap"
        >
          A fun and unserious social media platform with a bunch of quirky
          reactions targeted towards Gen Z. Made using Next.js, Tailwind, and
          Supabase.
        </motion.div>
      </motion.div>
      <ActionButton
        size="full"
        external={true}
        variant="spotlight"
        href="https://github.com/csvidit/squawk"
      >
        <motion.div layout className="flex flex-row space-x-2 items-center">
          <motion.div>Check out Squawk Social on</motion.div> <BsGithub />
        </motion.div>
      </ActionButton>
    </MainGridItem>
  );
};

export default Spotlight;
