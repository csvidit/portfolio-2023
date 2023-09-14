import { motion } from "framer-motion";
import Image from "next/image";
import HeroSubtitles from "./HeroSubtitles";
import ActionButton from "./ActionButton";
import MainGridItem from "../MainGridItem";

const Intro = () => {
  return (
    <MainGridItem width={4} height={1} className="items-center bg-transparent">
      <div className="flex flex-col flex-wrap space-y-4 items-center">
        <h1 className="geom text-4xl lg:text-8xl text-indigo-500 text-center text-medium">
          VIDIT KHANDELWAL
        </h1>
        <h2></h2>
        <HeroSubtitles />
      </div>
      <ActionButton size="fit" external={false} variant="plain" href="/about">
        More About Me
      </ActionButton>
    </MainGridItem>
  );
};

export default Intro;
