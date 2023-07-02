"use client";

import { motion } from "framer-motion";

const Footer = () => {
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
    <motion.div className="col-span-4 w-100 h-100 flex flex-col space-y-8 rounded-[3rem] p-8 lg:p-12 bg-neutral-900 text-neutral-300 font-light">
      <motion.div>
        &copy; 2023 Vidit Khandelwal. All rights reserved. All wrongs reserved,
        too.{" "}
      </motion.div>
    </motion.div>
  );
};

export default Footer;
