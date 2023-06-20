"use client";

import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";

const ProjectsButton = () => {
  const [hover, setHover] = useState(false);

  const mainDivVariants = {
    initial: {
      color: "#8b5cf6",
      backgroundColor: "#171717",
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.2,
        damping: 20,
        stiffness: 200,
      },
    },
    hover: {
      color: "#f5f5f5",
      backgroundColor: "#8b5cf6",
      scale: 0.95,
      transition: {
        type: "spring",
        duration: 0.2,
        damping: 20,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      variants={mainDivVariants}
      initial="initial"
      whileHover="hover"
      onHoverStart={() => {
        setHover(true);
      }}
      onHoverEnd={() => {
        setHover(false);
      }}
      className="col-span-1 lg:col-span-4 w-100 h-100 flex flex-col space-y-8 rounded-[3rem] p-8 lg:p-12"
    >
      <Link
        href="/projects"
        className="w-full h-full flex flex-row justify-between items-center space-x-4 text-4xl lg:text-6xl"
      >
        <motion.div layout className="flex geom grow">
          Projects? Projects.
        </motion.div>
        <BsArrowRight className="flex text-4xl lg:text-6xl" />
      </Link>
    </motion.div>
  );
};

export default ProjectsButton;
