"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div className="col-span-4 w-100 h-100 h-fit flex flex-col space-y-8 rounded-[3rem] p-8 lg:p-12 bg-neutral-900 text-neutral-300 font-light">
      <motion.div>
        &copy; 2023 Vidit Khandelwal. All rights reserved. All wrongs reserved,
        too.{" "}
      </motion.div>
    </motion.div>
  );
};

export default Footer;
