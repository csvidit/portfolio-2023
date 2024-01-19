"use client";

import { motion } from "framer-motion";

const decorationBorderVariants = {
  initial: { opacity: 0 },
  hover: { opacity: 1 },
};

const DecorationBorderHorizontal = (props: {color: string}) => {

  const colorClassName = "via-"+props.color

  return (
    <>
      <motion.div
        variants={decorationBorderVariants}
        className={`absolute top-full left-[8.33%] w-10/12 h-[1px] bg-gradient-to-r from-neutral-950 ${colorClassName} to-neutral-950`}
      ></motion.div>
      <motion.div
        variants={decorationBorderVariants}
        className={`absolute bottom-full left-[8.33%] w-10/12 h-[1px] bg-gradient-to-r from-neutral-950 ${colorClassName} to-neutral-950`}
      ></motion.div>
    </>
  );
};

export default DecorationBorderHorizontal;