"use client";

import { motion } from "framer-motion";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import { useState } from "react";

const MarqueeButton = (props: {
  children: React.ReactNode;
  href: string;
  variant: string; // can be nonfocus or focus
  color: string; // can be blue, indigo, or violet
  external: boolean;
  size: number; // 1, 2, 3, 4
  className?: string; // classNames to add to the button
}) => {
  const n = 100;

  const [hover, setHover] = useState(false);

  const colors = {
    dark: "#171717",
    gray: "#525252",
    light: "#f5f5f5",
    lightBlue: "#93c5fd",
    darkBlue: "#172554",
    lightIndigo: "#a5b4fc",
    darkIndigo: "#1e1b4b",
    lightViolet: "#c4b5fd",
    darkViolet: "#4c1d95",
  };

  let initialColor, color, initialBackgroundColor, backgroundColor;

  if (props.variant == "nonfocus") {
    initialColor = colors.light;
    initialBackgroundColor = colors.dark;
    color = props.color == "blue" ? colors.darkBlue : colors.darkViolet;
    backgroundColor =
      props.color == "blue" ? colors.lightBlue : colors.lightViolet;
  } else {
    initialColor = props.color == "blue" ? colors.darkBlue : colors.darkViolet;
    initialBackgroundColor =
      props.color == "blue" ? colors.lightBlue : colors.lightViolet;
    color = props.color == "blue" ? colors.darkBlue : colors.darkViolet;
    backgroundColor =
      props.color == "blue" ? colors.lightBlue : colors.lightViolet;
  }

  const mainDivVariants = {
    initial: {
      backgroundColor: initialBackgroundColor,
      color: initialColor,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.2,
        damping: 20,
        stiffness: 200,
      },
    },
    hover: {
      scale: 0.95,
      backgroundColor: backgroundColor,
      color: color,
      transition: {
        type: "spring",
        duration: 0.2,
        damping: 20,
        stiffness: 200,
      },
    },
  };

  const marqueeVariants = {
    hover: {
      x: [0, -10350],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50,
          ease: "linear",
        },
      },
    },
  };
  return (
    <motion.a
      href={props.href}
      onHoverStart={() => {
        setHover(true);
      }}
      onHoverEnd={() => {
        setHover(false);
      }}
      initial="initial"
      whileHover="hover"
      variants={mainDivVariants}
      className={`lg:col-span-${props.size} row-span-1 justify-center flex flex-col space-y-8 rounded-[3rem] p-8 lg:p-12 bg-neutral-900 text-neutral-100 overflow-hidden`}
    >
      <motion.div
        variants={marqueeVariants}
        className="flex flex-row items-center space-x-4 w-full"
      >
        <motion.div className={`flex flex-row ${props.size !=1 ? "justify-between" : "justify-center"} items-center space-x-4 w-full min-w-max text-4xl lg:text-6xl`}>
          <motion.div className={`flex geom ${props.size !=1 ? "grow" : "grow-0"} mx-4`}>{props.children}</motion.div>
          {props.size != 1 ? (
            props.external == true ? (
              <BsArrowUpRight />
            ) : (
              <BsArrowRight />
            )
          ) : (
            <></>
          )}
        </motion.div>
        {hover && (
          <motion.div className="flex flex-row items-center space-x-4 w-full">
            {[...Array(n)].map((e, i) => (
              <motion.div
                key={i}
                className="flex flex-row justify-between items-center space-x-4 w-full min-w-max text-4xl lg:text-6xl grow"
              >
                <motion.div className="flex geom grow mx-4">
                  {props.children}
                </motion.div>

                {props.size != 1 ? (
                  props.external == true ? (
                    <BsArrowUpRight />
                  ) : (
                    <BsArrowRight />
                  )
                ) : (
                  <></>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </motion.a>
  );
};

export default MarqueeButton;
