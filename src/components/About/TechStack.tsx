"use client";

import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiFirebase,
  SiJavascript,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import TechStackMarqueeItem from "./TechStackMarqueeItem";

const TechStack = () => {
  return (
    <motion.div className="lg:col-span-3 row-span-1 w-100 h-100 flex flex-row items-center space-x-2 rounded-[3rem] p-8 lg:p-12 bg-neutral-900">
      <motion.h2 className="geom text-2xl lg:text-4xl flex-nowrap w-4/12 text-indigo-500">
        my tech stack
      </motion.h2>
      <div className="w-9/12 relative flex overflow-x-hidden text-xl lg:text-2xl">
        <div className="animate-marquee whitespace-nowrap">
          <TechStackMarqueeItem>
            <SiTypescript className="inline" />
          </TechStackMarqueeItem>
          <TechStackMarqueeItem>
            <SiJavascript className="inline" />
          </TechStackMarqueeItem>
          <TechStackMarqueeItem>
            <SiReact className="inline" />
          </TechStackMarqueeItem>
          <TechStackMarqueeItem>
            <TbBrandNextjs className="inline" />
          </TechStackMarqueeItem>
          <TechStackMarqueeItem>
            <SiTailwindcss className="inline" />
          </TechStackMarqueeItem>
          <TechStackMarqueeItem>
            <FaJava className="inline" />
          </TechStackMarqueeItem>
          <TechStackMarqueeItem>
            <SiPostgresql className="inline" />
          </TechStackMarqueeItem>
          <TechStackMarqueeItem>
            <SiFirebase className="inline" />
          </TechStackMarqueeItem>
          <TechStackMarqueeItem>
            <SiSupabase className="inline" />
          </TechStackMarqueeItem>
          <TechStackMarqueeItem>
            <SiVercel className="inline" />
          </TechStackMarqueeItem>
        </div>

        <div className="absolute top-0 animate-marquee2 whitespace-nowrap ">
          <TechStackMarqueeItem>
            <SiTypescript className="inline" />
          </TechStackMarqueeItem>
          <TechStackMarqueeItem>
            <SiJavascript className="inline" />
          </TechStackMarqueeItem>
          <TechStackMarqueeItem>
            <SiReact className="inline" />
          </TechStackMarqueeItem>
          <TechStackMarqueeItem>
            <TbBrandNextjs className="inline" />
          </TechStackMarqueeItem>
          <TechStackMarqueeItem>
            <SiTailwindcss className="inline" />
          </TechStackMarqueeItem>
          <TechStackMarqueeItem>
            <FaJava className="inline" />
          </TechStackMarqueeItem>
          <TechStackMarqueeItem>
            <SiPostgresql className="inline" />
          </TechStackMarqueeItem>
          <TechStackMarqueeItem>
            <SiFirebase className="inline" />
          </TechStackMarqueeItem>
          <TechStackMarqueeItem>
            <SiSupabase className="inline" />
          </TechStackMarqueeItem>
          <TechStackMarqueeItem>
            <SiVercel className="inline" />
          </TechStackMarqueeItem>
        </div>
      </div>
    </motion.div>
  );
};

export default TechStack;
