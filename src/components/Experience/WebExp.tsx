"use client";

import { motion } from "framer-motion";

const WebExp = () => {
  return (
    <motion.div className="col-span-2 row-span-1 flex flex-col space-y-4 items-start rounded-[3rem] p-8 lg:p-12 text-2xl lg:text-4xl bg-neutral-900 text-neutral-100 font-light">
      <motion.div className="flex flex-col space-y-2 w-full">
        <motion.div className="text-2xl lg:text-4xl geom">
          DePauw / Web Team
        </motion.div>
        <motion.div className="flex flex-row space-x-2 items-baseline text-blue-500 geom text-xl lg:text-2xl">
          <motion.div>Web Developer Intern</motion.div>
          <motion.div className="text-neutral-500 text-base">
            Aug 2020 - Dec 2020
          </motion.div>
        </motion.div>
        <motion.div>
          <motion.ul className="flex flex-col space-y-1 text-base text-neutral-300 list-disc">
            <motion.li>
              Achieved an optimization boost of over 60% for DePauw University
              by leveraging powerful SEO tools of BigTree CMS and PageSpeed
              Insights.
            </motion.li>
            <motion.li>
              Designed and implemented a microsite on a LAMP server,
              strategically evaluating and testing potential use cases that
              align with the University&apos;s mission.
            </motion.li>
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WebExp;
