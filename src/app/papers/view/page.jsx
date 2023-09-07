"use client";

import IndexContent from "@/components/IndexContent";
import MainGridItem from "@/components/MainGridItem";
import { BsDot } from "react-icons/bs";
import { useState } from "react";

const ViewPaper = (props) => {
  return (
    <IndexContent>
      <MainGridItem
        width={4}
        height={1}
        className="justify-start h-fit text-lg lg:text-xl"
      >
        <div className=" text-red-500 uppercase">Academic Paper</div>
        <div className="text-2xl lg:text-4xl">
          An Analysis of the Desirability of Cross-Border Barriers to Trade
        </div>
        <div className="flex flex-row space-x-2 flex-wrap items-center text-neutral-500">
          <div className="uppercase">International Business</div>
          <BsDot />
          <div className="">OCT 14, 2022</div>
        </div>
      </MainGridItem>
      <MainGridItem width={4} height={2}>
        {" "}
        <embed
          id="iframepdf"
          src="https://media.graphassets.com/ErcL7ORbRJK4kJglDmNZ"
          className="w-full h-full"
        ></embed>
      </MainGridItem>
    </IndexContent>
  );
};

export default ViewPaper;
