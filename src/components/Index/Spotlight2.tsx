"use client";

import { motion } from "framer-motion";
import ActionButton from "./ActionButton";
import MainGridItem from "../MainGridItem";
import { PiGithubLogoDuotone } from "react-icons/pi";

const Spotlight2 = () => {
  return (
    <motion.div
      layout
      initial={{ background: "conic-gradient( from 0deg, #171717, #171717)" }}
      whileHover={{
        background: [
          "conic-gradient( from 0deg, #171717 60%, #eab308)",
          "conic-gradient( from 360deg, #171717 60%, #eab308)",
        ],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 4,
          type: "tween",
          ease: "linear",
        },
      }}
      className="col-span-2 row-span-1 rounded-[3rem] p-[2px]"
    >
      <MainGridItem width={2} height={1} className="">
        <div className="flex flex-col space-y-8">
          <div className="flex flex-row space-x-4 items-baseline">
            <h2 className="text-4xl lg:text-6xl geom">spotlight</h2>
          </div>

          <div className="font-light lg:text-2xl text-left line-gap">
            A fun and unserious social media platform with a bunch of quirky
            reactions targeted towards Gen Z. Made using Next.js, Tailwind, and
            Supabase.
          </div>
        </div>
        <ActionButton
          size="fit"
          external={true}
          variant="spotlight"
          href="https://github.com/csvidit/squawk"
        >
          <motion.div layout className="flex flex-row space-x-2 items-center">
            <motion.div>Squawk Social on</motion.div> <PiGithubLogoDuotone />
          </motion.div>
        </ActionButton>
      </MainGridItem>
    </motion.div>
  );
};

export default Spotlight2;
