"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Spotlight = () => {
  const [hover, setHover] = useState(false);

  const router = useRouter();

  const buttonVariants = {
    hover: { backgroundColor: "#171717", color: "#eab308" },
    initial: { backgroundColor: "#eab308", color: "#171717" },
  };

  const isBigScreen = useMediaQuery({ query: "(min-width: 1001px)" });

  const mainDivVariants = {
    initial: { backgroundColor: "#171717", color: "#eab308", scale: 1 },
    hover: {
      backgroundColor: "#eab308",
      color: "#171717",
      scale: 0.95,
      transition: {
        type: "spring",
        duration: 0.2,
        damping: 20,
        stiffness: 200,
      },
    },
  };

  const textVariants = {
    initial: { color: "#f5f5f5" },
    hover: {
      color: "#171717",
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
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
  };

  return (
    <motion.button
      onClick={() => {
        router.push("https://github.com/csvidit/squawk");
      }}
      variants={mainDivVariants}
      initial="initial"
      whileHover="hover"
      onHoverStart={(e) => {
        setHover(true);
      }}
      onHoverEnd={(e) => {
        setHover(false);
      }}
      className={`col-span-1 lg:col-span-2 flex flex-col space-y-8 justify-between rounded-[3rem] p-8 lg:p-12`}
    >
      <motion.div className="flex flex-col space-y-8">
        <motion.div className="flex flex-row space-x-4 items-center">
          <motion.div
            animate={{ rotateX: 15, rotateZ: -15 }}
            transition={{
              ease: "easeInOut",
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              width={50}
              height={50}
              alt="3D Star"
              src="/star-front-premium.png"
            />
          </motion.div>

          <motion.h2 className="text-4xl lg:text-6xl geom">
            spotlight
          </motion.h2>
        </motion.div>

        <motion.div
          variants={textVariants}
          className="font-light text-xl lg:text-2xl text-left line-gap"
        >
          A fun and unserious social media platform with a bunch of quirky
          reactions targeted towards Gen Z. Made using Next.js, Tailwind, and
          Supabase.
        </motion.div>
      </motion.div>
      <Link href="https://github.com/csvidit/squawk" className={`flex group`}>
        <motion.div
          layout
          variants={buttonVariants}
          // transition={{
          //   type: "spring",
          //   duration: 0.2,
          //   damping: 20,
          //   stiffness: 200,
          // }}
          className={`border border-neutral-600 rounded-[3rem] w-full h-full px-4 py-2 flex flex-row items-center group justify-between space-x-4 font-light text-xl lg:text-2xl`}
        >
          <AnimatePresence mode="popLayout">
            {hover && (
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                }}
                layout
                // layoutId="cta-arrow"
                className={`flex`}
              >
                <BsArrowUpRight />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.div layout className="flex flex-row space-x-2 items-center">
            <motion.div>Check out Squawk Social on</motion.div> <BsGithub />
          </motion.div>

          <AnimatePresence mode="popLayout">
            {!hover && (
              <motion.div
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                }}
                layout
                // layoutId="cta-arrow"
                className={`flex`}
              >
                <BsArrowUpRight />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Link>
      {/* <SpotlightActionButton href="https://github.com/csvidit/squawk">
        <div className="flex flex-row space-x-2 items-center">
          <div>Check out Squawk Social on</div> <BsGithub />
        </div>
      </SpotlightActionButton> */}
    </motion.button>
  );
};

export default Spotlight;
