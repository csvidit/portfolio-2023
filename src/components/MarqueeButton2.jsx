"use client";

import { motion } from "framer-motion";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import React, { useState } from "react";
import Link from "next/link";
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from "../../tailwind.config.js"

const MarqueeButton2 = (props) => {
  const n = 100;

  const [hover, setHover] = useState(false);

  const fullTailwindConfig = resolveConfig(tailwindConfig)

  const colors = {
    dark: "#171717",
    gray: "#525252",
    light: "#f5f5f5",
    lightBlue: "#93c5fd",
    darkBlue: "#172554",
    lightIndigo: "#a5b4fc",
    darkIndigo: "#1e1b4b",
    lightRed: "#fca5a5",
    darkRed: "#7f1d1d",
    lightViolet: "#c4b5fd",
    darkViolet: "#4c1d95",
  };

  let initialColor, color, initialBackgroundColor, backgroundColor;

  if (props.variant == "nonfocus") {
    initialColor = fullTailwindConfig.theme.colors.neutral[100]
    initialBackgroundColor = fullTailwindConfig.theme.colors.neutral[900]
    switch (props.color) {
      case "blue":
        backgroundColor = fullTailwindConfig.theme.colors.blue[300]
        color = fullTailwindConfig.theme.colors.blue[950]
        break;
      case "violet":
        backgroundColor = fullTailwindConfig.theme.colors.violet[300]
        color = fullTailwindConfig.theme.colors.violet[950]
        break;
      case "red":
        backgroundColor = fullTailwindConfig.theme.colors.red[300]
        color = fullTailwindConfig.theme.colors.red[950]
        break;
      case "indigo":
        backgroundColor = fullTailwindConfig.theme.colors.indigo[300]
        color = fullTailwindConfig.theme.colors.indigo[950]
        break;
    }
  } else {
    switch (props.color) {
      case "blue":
        initialBackgroundColor = fullTailwindConfig.theme.colors.blue[300]
        initialColor = fullTailwindConfig.theme.colors.blue[950]
        backgroundColor = fullTailwindConfig.theme.colors.blue[300]
        color = fullTailwindConfig.theme.colors.blue[950]
        break;
      case "violet":
        initialBackgroundColor = fullTailwindConfig.theme.colors.violet[300]
        initialColor = fullTailwindConfig.theme.colors.violet[950]
        backgroundColor = fullTailwindConfig.theme.colors.violet[300]
        color = fullTailwindConfig.theme.colors.violet[950]
        break;
      case "red":
        initialBackgroundColor = fullTailwindConfig.theme.colors.red[300]
        initialColor = fullTailwindConfig.theme.colors.red[950]
        backgroundColor = fullTailwindConfig.theme.colors.red[300]
        color = fullTailwindConfig.theme.colors.red[950]
        break;
      case "indigo":
        initialBackgroundColor = fullTailwindConfig.theme.colors.indigo[300]
        initialColor = fullTailwindConfig.theme.colors.indigo[950]
        backgroundColor = fullTailwindConfig.theme.colors.indigo[300]
        color = fullTailwindConfig.theme.colors.indigo[950]
        break;
    }
  }

  const mainDivVariants = {
    initial: {
      // gridRow: props.height ? "span 1 /"+"span "+props.height : "span 1 / span 1",
      gridRow: "span 1 / span 1",
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
      // gridRow: props.height ? "span 1 /"+"span "+props.height : "span 1 / span 1",
      gridRow: "span 1 / span 1",
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
    <motion.div
      onHoverStart={() => {
        setHover(true);
      }}
      onHoverEnd={() => {
        setHover(false);
      }}
      initial="initial"
      whileHover="hover"
      variants={mainDivVariants}
      className={`lg:col-span-${props.size} ${props.height? "lg:row-span-"+props.height : "lg:row-span-1"} justify-center rounded-[3rem] bg-neutral-900 text-neutral-100 text-4xl lg:text-6xl lg:min-h-[160px] overflow-x-hidden`}
    >
      <Link
        tabIndex={0}
        aria-label={props.alt ? props.alt : `Link to ${props.children}`}
        href={props.href}
        target={props.href.startsWith("http") || props.href.startsWith("https") ? "_blank" : ""}
        className="flex flex-col w-full h-full justify-center"
      >
        <motion.div
          variants={marqueeVariants}
          className="flex flex-row items-center space-x-4 w-full h-full p-8 lg:p-12"
        >
          <motion.div
            className={`flex flex-row ${
              props.size != 1 ? "justify-between" : "justify-center"
            } items-center space-x-4 w-full min-w-max `}
          >
            <motion.div
              className={`flex flex-row space-x-4 items-center geom ${
                props.size != 1 ? "grow" : "grow-0"
              } mx-4`}
            >
              {hover ? props.children : props.label}
            </motion.div>
            {props.size != 1 ? (
              props.href.startsWith("http") || props.href.startsWith("https") ? (
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
                  <motion.div className="flex flex-row space-x-4 items-center geom grow mx-4">
                    {props.children}
                  </motion.div>

                  {props.size != 1 ? (
                    props.href.startsWith("http") || props.href.startsWith("https") ? (
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
      </Link>
    </motion.div>
  );
};

export default MarqueeButton2;
