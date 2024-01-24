"use client";

import { motion } from "framer-motion";
import { FaJava, FaDigitalOcean } from "react-icons/fa";
import { SiGooglecloud, SiAndroidstudio, SiXcode } from "react-icons/si";
import {
  TbBrandTypescript,
  TbBrandKotlin,
  TbBrandPython,
  TbSql,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandFramerMotion,
  TbBrandOauth,
  TbBrandFirebase,
  TbBrandSupabase,
  TbBrandVercel,
  TbBrandAws,
  TbBrandVisualStudio,
} from "react-icons/tb";

const IntroIcons = () => {
  return (
    <motion.ul
    //   initial={{ color: "#737373" }}
    //   animate={{ color: ["#737373", "#8b5cf6", "#737373"]}}
    //   transition={{
    //     duration: 2,
    //     repeat: Infinity,
    //     repeatType: "reverse",
    //     staggerDirection: 1,
    //     staggerChildren: 2
    //   }}
      className="flex flex-row gap-2 lg:gap-4 flex-wrap lg:text-2xl bg-gradient-to-r from-neutral-500 to-violet-500 bg-clip-text"
    >
      <motion.li>
        <TbBrandTypescript />
      </motion.li>
      <motion.li>
        <TbBrandKotlin />
      </motion.li>
      <motion.li>
        <FaJava />
      </motion.li>
      <motion.li>
        <TbBrandPython />
      </motion.li>
      <motion.li>
        <TbSql />
      </motion.li>
      <motion.li>
        <TbBrandNextjs />
      </motion.li>
      <motion.li>
        <TbBrandTailwind />
      </motion.li>
      <motion.li>
        <TbBrandFramerMotion />
      </motion.li>
      <motion.li>
        <TbBrandOauth />
      </motion.li>
      <motion.li>
        <TbBrandFirebase />
      </motion.li>
      <motion.li>
        <TbBrandSupabase />
      </motion.li>
      <motion.li>
        <FaDigitalOcean />
      </motion.li>
      <motion.li>
        <TbBrandVercel />
      </motion.li>
      <motion.li>
        <TbBrandAws />
      </motion.li>
      <motion.li>
        <SiGooglecloud />
      </motion.li>
      <motion.li>
        <SiAndroidstudio />
      </motion.li>
      <motion.li>
        <TbBrandVisualStudio />
      </motion.li>
      <motion.li>
        <SiXcode />
      </motion.li>
    </motion.ul>
  );
};

export default IntroIcons;
