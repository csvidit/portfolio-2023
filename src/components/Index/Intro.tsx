"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroSubtitles from "./HeroSubtitles";
import ActionButton from "./ActionButton";
import MainGridItem from "../MainGridItem";

const Intro = () => {
  return (
    <MainGridItem width={4} height={1} className="items-center bg-transparent">
      <motion.div className="flex flex-col flex-wrap space-y-4 items-center">
        <motion.h1 className="text-4xl lg:text-6xl text-indigo-500 text-center">
          VIDIT KHANDELWAL
        </motion.h1>
        <HeroSubtitles />
      </motion.div>
      <ActionButton size="fit" external={false} variant="plain" href="/about">
        More About Me
      </ActionButton>
    </MainGridItem>
  );
};

export default Intro;
