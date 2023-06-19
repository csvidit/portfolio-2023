'use client'

import { useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import AOS from "aos";

const IndexContent = (props: {children: React.ReactNode}) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const indexContent = useRef(null)
  const isInView = useInView(indexContent);

  
  return (
    <motion.div ref={indexContent} className="mt-20 lg:mt-10 min-w-screen min-h-screen w-full h-full flex flex-col space-y-4 lg:grid grid-cols-1 lg:grid-cols-4 lg:space-y-0 lg:gap-4 bg-transparent p-8 lg:p-20">
      {props.children}
    </motion.div>
  );
};

export default IndexContent;
