"use client";

import { MotionConfig, motion } from "framer-motion";
import ExpBullets from "./ExpBullets";
import KeySkillItem from "./KeySkillItem";
import KeySkillsContainer from "./KeySkillsContainer";
import CurrentKeySkillItem from "./CurrentKeySkillItem";
import { SiAndroidstudio, SiFirebase, SiJetpackcompose, SiKotlin } from "react-icons/si";
import { PiCompassFill } from "react-icons/pi";
import { MdArchitecture } from "react-icons/md";

const CurrentExp = () => {
  const parentDivVariants = {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1
    },
  };

  const mainDivVariants = {
    initial: {
      backgroundColor: "#171717",
      scale: 1,
    },
    hover: {
      backgroundColor: "#2e1065",
      scale: 1,
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
      <motion.div
        variants={parentDivVariants}
        initial="initial"
        whileHover="hover"
        animate={{
          background: [
            "conic-gradient( from 0deg, #0a0a0a 60%, #3b82f6)",
            "conic-gradient( from 360deg, #0a0a0a 60%, #3b82f6)",
          ],
          transition: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 4,
            type: "tween",
            ease: "linear",
          },
        }}
        className="relative col-span-4 row-span-2 rounded-[3rem] p-[1px]"
      >
        <motion.div
          variants={mainDivVariants}
          className="rounded-[3rem] p-8 lg:p-12 font-normal w-full h-full flex flex-col justify-between space-y-4 bg-gradient-to-br from-neutral-950 via-neutral-950 to-blue-950 bg-opacity-[60%]"
        >
          <div className="text-blue-500">Contract</div>
          <div className="font-normal text-2xl lg:text-4xl">Pixus Inc.</div>
          <h3
            className={`font-normal text-blue-500 geom text-xl lg:text-2xl flex flex-row space-x-2 items-center`}
          >
            Software Development Engineer
          </h3>
          <ExpBullets>
            <li>
              Developed the second version of the CaptureNoire internal beta
              with refreshed UI made using Jetpack Compose and backend code
              ported to Kotlin
            </li>
            <li>
              Revamped the user flow of the app for a more immersive UX, and
              added Firebase Authentication, Storage, and Firestore database
              integrations
            </li>
            <li>
              Used Hilt for dependency injection and for implementation of the MVVM architecture
            </li>
          </ExpBullets>
          <KeySkillsContainer>
          <CurrentKeySkillItem icon={<SiKotlin/>}>Kotlin</CurrentKeySkillItem>
            <CurrentKeySkillItem icon={<SiJetpackcompose/>}>Jetpack Compose</CurrentKeySkillItem>
            <CurrentKeySkillItem icon={<PiCompassFill/>}>Hilt</CurrentKeySkillItem>
            <CurrentKeySkillItem icon={<SiFirebase/>}>Firebase</CurrentKeySkillItem>
            <CurrentKeySkillItem icon={<SiAndroidstudio/>}>Android Studio</CurrentKeySkillItem>
            <KeySkillItem icon={<MdArchitecture />}>MVVM</KeySkillItem>
          </KeySkillsContainer>
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
};

export default CurrentExp;
