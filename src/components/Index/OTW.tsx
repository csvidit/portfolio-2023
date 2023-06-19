'use client'

import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";
import styles from "./OTW.module.css";

const OTW = () => {
  return (
    <motion.div className={`col-span-1 lg:col-span-4 text-2xl lg:text-4xl lg:justify-between flex flex-col lg:items-center rounded-[3rem] p-8 lg:p-12 space-y-4 lg:space-y-0 lg:flex-row lg:space-x-8 text-emerald-600 ${styles.magicpattern}`}>
      <motion.div className="geom">Open to Work</motion.div>
      <motion.div className="text-xl lg:text-2xl text-neutral-100 font-light">
        Software Engineer, Web Developer, UI Engineer positions
      </motion.div>
      {/* <motion.div>
        <MdWork className="text-4xl lg:text-6xl justify-self-end" />
      </motion.div> */}
    </motion.div>
  );
};

export default OTW;
