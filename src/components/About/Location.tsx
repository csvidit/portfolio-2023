"use client";

import { motion, useScroll } from "framer-motion";
import { useState, useEffect, useMemo, Suspense } from "react";
import { TbLocationFilled } from "react-icons/tb";
import { LiaFlagUsaSolid } from "react-icons/lia";

const Location = () => {
  const { scrollY } = useScroll();

  const [currentTime, setCurrentTime] = useState(new Date());

  //chatgpt code
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedTime = useMemo(() => {
    return currentTime.toLocaleTimeString("en-US", {
      timeStyle: "medium",
      timeZone: "America/New_York",
    });
  }, [currentTime]);

  return (
    <motion.div className="lg:col-span-2 row-span-1 w-100 h-100 flex flex-row justify-between items-center text-4xl lg:text-6xl rounded-[3rem] p-8 lg:p-12 bg-neutral-900">
      {/* <motion.div className="h-full w-full relative">
        <Image src="/indiana.svg" alt="Flag of the State of Indiana" fill/>
      </motion.div> */}
      <motion.div style={{ rotate: scrollY }} className="text-emerald-500">
        <TbLocationFilled />
      </motion.div>
      <Suspense>
        <motion.div className="flex flex-col items-end space-y-1 geom">
          <motion.div className="uppercase text-base lg:text-xl">
            United States <em className="lowercase">of</em> America
          </motion.div>
          <motion.h2 className="">indianapolis</motion.h2>
          <motion.div className="text-base lg:text-xl">
            {formattedTime} EST
          </motion.div>
        </motion.div>
      </Suspense>
    </motion.div>
  );
};

export default Location;
