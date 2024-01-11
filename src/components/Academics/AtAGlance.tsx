"use client";

import { motion } from "framer-motion";
import ScrollToButton from "./ScrollToButton";

const AtAGlance = () => {
  return (
    <motion.div
      animate={{
        background: [
          "conic-gradient( from 0deg, #0a0a0a 60%, #ef4444)",
          "conic-gradient( from 360deg, #0a0a0a 60%, #ef4444)",
        ],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 4,
          type: "tween",
          ease: "linear",
        },
      }}
      className="relative col-span-4 row-span-1 rounded-[3rem] p-[1px]"
    >
      <motion.div className="rounded-[3rem] p-8 lg:p-12 font-normal w-full h-full flex flex-col justify-between space-y-4 bg-gradient-to-br from-neutral-950 via-neutral-950 to-red-950 bg-opacity-[60%]">
        <h2 className="text-red-500 font-normal text-2xl lg:text-4xl">
          at a glance
        </h2>
        <p className="lg:text-xl text-red-100">
          I recently graduated summa cum laude with a Bachelor&apos;s degree
          from DePauw University, where I majored in Computer Science and
          minored in Economics. I also studied abroad at the University of
          Oxford, where I took concentrated courses in International Economics
          and Creative Writing. My strong suits in computer science are mobile
          and web development, and my strength in Economics lies in development
          economics, often with an international perspective. My future academic
          goal is to either pursue a Master&apos;s degree in Software
          Engineering or Human Computer Interaction, or a tech-oriented MBA.
        </p>

        <div className="flex flex-row space-x-4 items-center">
          <div className="text-md lg:text-lg text-red-500">Sections</div>
          <ScrollToButton id="depauw">DePauw</ScrollToButton>
          <ScrollToButton id="oxford">Oxford</ScrollToButton>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AtAGlance;
