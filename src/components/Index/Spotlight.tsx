"use client";

import { motion } from "framer-motion";
import MainGridItem from "../MainGridItem";
import { PiGithubLogoDuotone } from "react-icons/pi";
import ActionLink from "../ActionLink";
import SecondaryButton from "../SecondaryButton";

const Spotlight = () => {
  return (
   <MainGridItem width={2} height={1} className="">
      <div className="flex flex-col space-y-8">
        <div className="flex flex-row space-x-4 items-baseline">
          <h2 className="text-4xl lg:text-6xl text-yellow-500">spotlight</h2>
        </div>

        <div
          className="font-light lg:text-2xl text-left line-gap"
        >
           <SecondaryButton
            plain
            variant="spotlight"
            href="https://snippetopia.xyz"
          >
            Squawk Social
          </SecondaryButton>{" "}, a fun and unserious social media platform with a bunch of quirky
          reactions targeted towards Gen Z. Made using Next.js, Tailwind, and
          Supabase.
        </div>
      </div>
    </MainGridItem>
  );
};

export default Spotlight;
