"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroSubtitles from "./HeroSubtitles";
import ActionButton from "./ActionButton";
import MainGridItem from "../MainGridItem";

const Intro = () => {
  return (
    <MainGridItem width={2} height={1}>
      <motion.div className="flex flex-col space-y-2 geom">
        <Image
          src="/ccclaymoji(1).svg"
          width={100}
          height={100}
          alt="3D Smiley Emoji"
        />
        <motion.h1 className="text-4xl lg:text-6xl text-violet-500">
          vidit khandelwal
        </motion.h1>
      </motion.div>{" "}
      <HeroSubtitles />
      <ActionButton size="full" external={false} variant="plain" href="/about">
        More About Me
      </ActionButton>
    </MainGridItem>
  );
};

export default Intro;
