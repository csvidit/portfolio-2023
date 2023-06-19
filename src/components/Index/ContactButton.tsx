"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const ContactButton = () => {
  const [hover, setHover] = useState(false);

  return (
    <motion.button
      onHoverStart={() => {
        setHover(true);
      }}
      onHoverEnd={() => {
        setHover(false);
      }}
      whileHover={{ backgroundColor: "#f43f5e", color: "#f5f5f5" }}
      transition={{
        type: "spring",
        duration: 0.4,
        stiffness: 200,
        damping: 20,
      }}
      style={{ borderRadius: "16px" }}
      layout
      className="flex flex-col lg:flex-row space-y-2 lg:space-x-2 lg:space-y-0 px-4 py-2 items-start text-xl lg:text-2xl font-light border border-rose-500 w-fit"
    >
      <motion.div layout>Email</motion.div>

      <motion.div layout>
        <Link href="mailto:viditkhandelwal_2023@depauw.edu">
          viditkhandelwal_2023@depauw.edu
        </Link>
      </motion.div>
    </motion.button>
  );
};

export default ContactButton;
