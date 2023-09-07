"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Personality = () => {
  return (
    <motion.div className="lg:col-span-3 row-span-1 w-100 h-100 flex flex-col space-y-8 rounded-[3rem] p-8 lg:p-12 bg-neutral-900">
      <motion.h2
        layout
        className="flex geom grow text-4xl lg:text-6xl text-indigo-500"
      >
        i also...
      </motion.h2>
      <motion.div
        layout
        className="grid lg:grid-cols-3 gap-4 font-light text-xl lg:text-2xl geom"
      >
        <motion.div className="flex flex-col space-y-2 items-start">
          <motion.div className="relative w-24 h-24">
            <Image
              src="/takeaway-cup-dynamic-color.png"
              fill
              alt="Takeaway cup icon object-contain"
            />
          </motion.div>
          <motion.div className="text-neutral-500">
            like getting a large iced latte with friends
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-col space-y-2 items-start">
          <motion.div className="relative w-24 h-24">
            <Image
              src="/headphone-dynamic-color.png"
              fill
              alt="Takeaway cup icon object-contain"
            />
          </motion.div>
          <motion.div className="text-neutral-500">
            listen to the most basic pop music
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-col space-y-2 items-start">
          <motion.div className="relative w-24 h-24">
            <Image
              src="/computer-dynamic-color.png"
              fill
              alt="Takeaway cup icon object-contain"
            />
          </motion.div>
          <motion.div className="text-neutral-500">
            binge watch tv shows in bed
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Personality;
