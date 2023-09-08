"use client";

import { motion } from "framer-motion";

const AboutTitle = () => {
  return (
    <motion.div className="lg:col-span-3 row-span-2 w-100 h-100 flex flex-col space-y-8 rounded-[3rem] p-8 lg:p-12 bg-transparent">
      <motion.h1
        layout
        className="flex geom grow text-4xl lg:text-6xl text-indigo-500"
      >
        here&apos;s the tl;dr
      </motion.h1>
      <motion.p
        layout
        className="flex flex-row space-x-1 font-light lg:text-2xl flex-wrap text-justify"
      >
        I am particularly strong in full-stack web development using frameworks
        like Next.js, and have a track record of great outcomes in native
        Android development. I like the design part of development as well as
        the backend, because that puts the focus back on end user. I
        am very adaptive, having performed well in both team and independent
        professional and leadership environments. I understand business as well
        as I do code, and thrive in the intersection of the two.
      </motion.p>
    </motion.div>
  );
};

export default AboutTitle;
