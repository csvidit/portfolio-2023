"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import InlineButton from "./InlineButton";

const Contact = () => {
  return (
    <motion.div className="col-span-1 lg:col-span-2 flex flex-col space-y-8 row-span-2 rounded-[3rem] p-8 lg:p-12 bg-neutral-900 text-rose-500">
      <motion.div className="flex flex-row items-center space-x-4">
        <motion.div
          animate={{ rotateX: 15, rotateZ: -15 }}
          transition={{
            ease: "easeInOut",
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Image
            width={50}
            height={50}
            alt="3D Star"
            src="/phone-outgoing-dynamic-clay.png"
          />
        </motion.div>
        <motion.div className="flex geom text-4xl lg:text-6xl">
          Contact
        </motion.div>
      </motion.div>
      <InlineButton href="mailto:viditkhandelwal_2023@depauw.edu" color="neutral-100">
      viditkhandelwal_2023@depauw.edu
      </InlineButton>
      <InlineButton href="https://calendly.com" color="neutral-100">
      Want to call? Let&apos;s schedule a meeting. 
      </InlineButton>
    </motion.div>
  );
};

export default Contact;
