'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import ActionButton from "./ActionButton";
import HeroSubtitles from "./HeroSubtitles";
import styles from "./Intro.module.css"

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
        <motion.div className="text-4xl lg:text-6xl text-violet-500">
          vidit khandelwal
        </motion.div>
      </motion.div>{" "}
      <HeroSubtitles />
      <ActionButton href="/about">More About Me</ActionButton>
    </motion.div>
  );
};

export default Intro;