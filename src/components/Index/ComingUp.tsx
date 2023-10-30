"use client";

import { motion } from "framer-motion";
import MainGridItem from "../MainGridItem";

const ComingUp = () => {
  return (
    <MainGridItem width={2} height={1}>
      <motion.div className="flex flex-col space-y-8">
        <motion.div className="flex flex-row space-x-4 items-baseline">
          {/* <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{
              ease: "easeInOut",
              duration: 32,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <Image
              width={50}
              height={50}
              alt="3D Star"
              src="/star-front-premium.png"
            />
            <PiHammerDuotone className="text-2xl lg:text-4xl text-violet-500" />
          </motion.div> */}

          <motion.h2 className="text-4xl lg:text-6xl geom">coming up</motion.h2>
        </motion.div>

        <motion.div
          // variants={textVariants}
          className="font-light lg:text-2xl text-left line-gap"
        >
         trimr, a minimalist URL shortener service. Made using Next.js and Firebase.
        </motion.div>
      </motion.div>
      {/* <ActionButton
        size="full"
        external={true}
        variant="spotlight"
        href="https://github.com/csvidit/squawk"
      >
        <motion.div layout className="flex flex-row space-x-2 items-center">
          <motion.div>Squawk Social on</motion.div> <BsGithub />
        </motion.div>
      </ActionButton> */}
    </MainGridItem>
  );
};

export default ComingUp;
