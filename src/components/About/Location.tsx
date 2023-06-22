"use client";

import { motion, useScroll } from "framer-motion";
import { TbLocationFilled } from "react-icons/tb";

const Location = () => {

  const { scrollY } = useScroll();

  return (
    <motion.div className="lg:col-span-2 row-span-1 w-100 h-100 flex flex-row justify-between items-center text-4xl lg:text-6xl rounded-[3rem] p-8 lg:p-12 bg-neutral-900">
      {/* <motion.div className="h-full w-full relative">
        <Image src="/indiana.svg" alt="Flag of the State of Indiana" fill/>
      </motion.div> */}
      <motion.div style={{rotate: scrollY}} className="text-emerald-500">
        <TbLocationFilled/>
      </motion.div>
      <motion.div className="flex flex-col items-end space-y-1 geom">
        <motion.h2 className="">
        Indianapolis
        </motion.h2>
        <motion.div className="text-md lg:text-xl">
        {new Date().toLocaleTimeString("en-US", { timeZone: "America/New_York" })}
        </motion.div>
        
      </motion.div>
    </motion.div>
  );
};

export default Location;
