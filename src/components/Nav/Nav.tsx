"use client";

import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
} from "framer-motion";
import NavLink from "./NavLink";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../Index/Logo";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import { HiAcademicCap, HiHome } from "react-icons/hi2";
import {
  BsFillLightningChargeFill,
  BsGridFill,
  BsPaletteFill,
  BsPersonFill,
} from "react-icons/bs";
import {FaScroll} from "react-icons/fa"

const Nav = () => {
  const [current, setCurrent] = useState(null);
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  console.log("PATHNAME", pathName);

  const links = [
    { name: "Home", href: "/", icon: <HiHome /> },
    { name: "About", href: "/about", icon: <BsPersonFill /> },
    {
      name: "Work Experience",
      href: "/experience",
      icon: <BsFillLightningChargeFill />,
    },
    { name: "Projects", href: "/projects", icon: <BsGridFill /> },
    { name: "Studio", href: "https://studio.viditkhandelwal.com", icon: <BsPaletteFill /> },
    // { name: "Academic Papers", href: "/papers", icon: <HiAcademicCap /> },
    // { name: "Stories & Poems", href: "/papers", icon: <FaScroll/> },
  ];

  return (
    <MotionConfig
      transition={{
        type: "spring",
        duration: 0.4,
        stiffness: 200,
        damping: 20,
        staggerChildren: 0.1,
      }}
    >
      <AnimatePresence>
        <motion.nav
          layout
          style={{ borderRadius: "24px" }}
          className={`geom z-50 fixed self-center top-4 px-4 py-2 flex flex-col space-y-2 items-center border border-neutral-800 bg-neutral-900 bg-opacity-60 backdrop-blur-md`}
        >
          <AnimatePresence>
            <LayoutGroup id="nav-layout-group">
              <motion.div
                layout
                className="flex flex-row space-x-2 items-center"
              >
                <LayoutGroup>
                  <AnimatePresence mode="wait">
                    <motion.div layout className="">
                      <Link href="/" className="flex flex-row space-x-1">
                        <motion.div layout>vidit khandelwal</motion.div>
                        <motion.div layout className="text-lime-500">
                          {pathName == "/"
                            ? "portfolio"
                            : pathName.substring(1)}
                        </motion.div>
                      </Link>
                    </motion.div>
                    {/* {open && (
                      <AnimatePresence>
                        <motion.div layout className="text-lime-500">
                          portfolio
                        </motion.div>
                      </AnimatePresence>
                    )} */}
                    <motion.div layout className="">
                      <Hamburger size={20} toggle={setOpen} toggled={open} />
                    </motion.div>
                  </AnimatePresence>
                </LayoutGroup>
              </motion.div>

              {open && (
                <motion.ul
                  layout
                  className="grid grid-cols-2 lg:grid-cols-3 gap-2 items-center"
                >
                  <LayoutGroup>
                    <AnimatePresence>
                      {links.map((x, index) => {
                        return (
                          <motion.div
                            initial={{ skewY: 20 }}
                            animate={{ skewY: 0 }}
                            exit={{ skewY: 20 }}
                            transition={{
                              delay: 0.4,
                              type: "spring",
                              duration: 0.2,
                              stiffness: 200,
                              damping: 20,
                              staggerChildren: 0.1,
                            }}
                            layout
                            key={index}
                            className="flex flex-row space-x-1 items-center"
                          >
                            {/* <AnimatePresence>
                              {pathName == x.href && (
                                <motion.div
                                  layout
                                  className="w-1 h-1 bg-lime-500 rounded-full"
                                ></motion.div>
                              )}
                            </AnimatePresence> */}
                            <NavLink
                              current={pathName == x.href ? true : false}
                              key={index}
                              href={x.href}
                              icon={x.icon}
                            >
                              {x.name}
                            </NavLink>
                          </motion.div>
                        );
                      })}
                    </AnimatePresence>
                  </LayoutGroup>
                </motion.ul>
              )}
            </LayoutGroup>
          </AnimatePresence>
        </motion.nav>
      </AnimatePresence>
    </MotionConfig>
  );
};

export default Nav;