"use client";

import { MotionConfig, motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { PiCrownDuotone, PiStarFill } from "react-icons/pi";

const FeaturedProjectItem = (props: {
  title: string;
  href: string;
  children: React.ReactNode;
  icons: React.ReactNode;
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hover, setHover] = useState(false);
  // const [color, setColor] = useState("#171717");
  const [color, setColor] = useState("#2e1065");

  useEffect(() => {
    const boxElement = ref.current;

    if (!boxElement) {
      return;
    }

    const updateAnimation = () => {
      const angle =
        (parseFloat(boxElement.style.getPropertyValue("--angle")) + 0.6) % 360;
      boxElement.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(updateAnimation);
    };

    requestAnimationFrame(updateAnimation);
  }, []);

  const mainDivVariants = {
    initial: {
      backgroundColor: "#171717",
      // color: "#737373",
      scale: 1,
    },
    hover: {
      backgroundColor: "#2e1065",
      // color: "#c4b5fd",
      scale: 0.95,
    },
  };

  const titleVariants = {
    initial: { color: "#f5f5f5" },
    hover: { color: "#ede9fe" },
  };

  const arrowVariants = {
    initial: { color: "#f5f5f5" },
    hover: { color: "#eab308" },
  };

  return (
    <MotionConfig
      transition={{
        type: "spring",
        duration: 0.2,
        damping: 20,
        stiffness: 200,
      }}
    >
      <motion.a
        onHoverStart={() => {
          setHover(true);
          setColor("#2e1065");
        }}
        onHoverEnd={() => {
          setHover(false);
          // setColor("#171717");
          setColor("#2e1065");
        }}
        ref={ref}
        href={props.href}
        target="_blank"
        variants={mainDivVariants}
        initial="initial"
        whileHover="hover"
        style={
          {
            "--angle": "0deg",
            "--border-color": "linear-gradient(var(--angle), #0a0a0a, #8b5cf6)",
            "--bg-color": `linear-gradient(#0a0a0a, ${color})`,
          } as CSSProperties
        }
        className="flex flex-col justify-between space-y-4 col-span-2 row-span-2 rounded-[3rem] p-8 lg:p-12 border border-[#0000] [background:padding-box_var(--bg-color),border-box_var(--border-color)]"
      >
        <motion.div className="flex flex-col space-y-4 justify-start items-start w-full">
          {/* <motion.div className="flex flex-row space-x-2 text-yellow-500 items-center text-2xl lg:text-4xl">
            <PiCrownDuotone />
          </motion.div> */}
          <motion.div variants={titleVariants} className="text-2xl lg:text-4xl">
            {props.title}
          </motion.div>
          <motion.div className="lg:text-xl text-left text-violet-300">
            {props.children}
          </motion.div>
        </motion.div>
        <motion.div className="flex flex-col space-y-4 justify-start items-start w-full">
          <motion.div className="w-full flex flex-col space-y-4 text-violet-300">
            {props.icons}
            <motion.div
              variants={arrowVariants}
              className="flex flex-row space-x-2 items-center"
            >
              <span>Detailed README on Github</span>
              <BsArrowUpRight />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.a>
    </MotionConfig>
  );
};

export default FeaturedProjectItem;
