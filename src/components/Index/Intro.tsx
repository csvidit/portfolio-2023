'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import HeroSubtitles from "./HeroSubtitles";
import ActionButton from "./ActionButton";

const Intro = () => {
  return (
    <motion.div
      className={`col-span-1 lg:col-span-2 flex flex-col space-y-8 bg-neutral-900 rounded-[3rem] p-8 lg:p-12`}
    >
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
      <ActionButton size="full" external={false} variant="plain" href="/about">More About Me</ActionButton>
    </motion.div>
  );
};

export default Intro;