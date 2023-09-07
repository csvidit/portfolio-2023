"use client";

import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
} from "framer-motion";

const gridItemVariants = {
  animate: { backgroundColor: ["#171717", "#525252"] },
};

const PapersLoading = () => {
  return (
    <>
      <MotionConfig
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          type: "spring",
          duration: 0.2,
          damping: 20,
          stiffness: 200,
        }}
      >
        <LayoutGroup>
          <AnimatePresence>
            <motion.div
              animate="gridItemVariants"
              className={`col-span-1 lg:col-span-2 lg:row-span-1 flex flex-col space-y-8 justify-between rounded-[3rem] p-8 lg:p-12 bg-neutral-900`}
            >
              <motion.div className="text-xl lg:text-2xl">
                Loading...
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              animate="gridItemVariants"
              className={`col-span-1 lg:col-span-2 lg:row-span-1 flex flex-col space-y-8 justify-between rounded-[3rem] p-8 lg:p-12 bg-neutral-900`}
            >
              <motion.div className="text-xl lg:text-2xl">
                Loading...
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </LayoutGroup>
      </MotionConfig>
    </>
  );
};

export default PapersLoading;
