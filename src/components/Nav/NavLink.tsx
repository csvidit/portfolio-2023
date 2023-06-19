"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { UrlObject } from "url";

const NavLink = (props: {
  href: string | UrlObject;
  children: React.ReactNode;
  current?: boolean;
  icon: React.ReactNode;
}) => {
  return (
    <AnimatePresence>
      <motion.li
        layout
        className={`grid-cols-1 w-full h-full border group  transition-all ease-in-out duration-300 rounded-xl ${
          props.current == true ? "border-lime-500 hover:border-lime-300" : "border-neutral-800 hover:border-neutral-600"
        }`}
      >
        <Link
          href={props.href}
          className="p-4 flex flex-col space-y-1 items-center w-full h-full relative transition-all"
        >
          <motion.div
            className={`${
              props.current == true ? "text-lime-500" : "text-neutral-100"
            }`}
          >
            {props.icon}
          </motion.div>

          <motion.div
            className={`relative flex flex-col items-center transition-all duration-300 ease-in-out h-[1.25rem] overflow-hidden ${
              props.current == true ? "text-lime-500" : "text-neutral-100"
            }`}
          >
            <motion.div className="flex opacity-100 -translate-y-0 group-hover:-translate-y-full group-hover:opacity-0 duration-300 ease-in-out">
              {props.children}
            </motion.div>
            <motion.div className="flex opacity-0 -translate-y-0 group-hover:-translate-y-full group-hover:opacity-100 duration-300 ease-in-out">
              {props.children}
            </motion.div>
          </motion.div>
        </Link>
      </motion.li>
    </AnimatePresence>
  );
};

export default NavLink;
