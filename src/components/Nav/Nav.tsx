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
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import { HiAcademicCap } from "react-icons/hi2";
import {
  PiArticleFill,
  PiBookOpenFill,
  PiCameraFill,
  PiHouseFill,
  PiLightningFill,
  PiPenFill,
  PiSquaresFourFill,
  PiUserFill,
} from "react-icons/pi";
import { v4 as uuidv4 } from "uuid";

const Nav = (props: { notFound?: boolean }) => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  const links = [
    { name: "Home", href: "/", icon: <PiHouseFill /> },
    { name: "About", href: "/about", icon: <PiUserFill /> },
    {
      name: "Work Experience",
      href: "/experience",
      icon: <PiLightningFill />,
    },
    { name: "Academics", href: "/academics", icon: <HiAcademicCap /> },
    { name: "Projects", href: "/projects", icon: <PiSquaresFourFill /> },
    { name: "Papers", href: "/papers", icon: <PiBookOpenFill /> },
    // { name: "Literature", href: "/literature", icon: <PiPenFill /> },
    { name: "Photography", href: "/photography", icon: <PiCameraFill /> },
    { name: "Blog", href: "/blog", icon: <PiArticleFill /> },

    // {
    //   name: "Studio",
    //   href: "https://studio.viditkhandelwal.com",
    //   icon: <BsPaletteFill />,
    // },
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
          // style={{
          //   paddingLeft: "1rem",
          //   paddingRight: "1rem",
          //   paddingTop: "0.5rem",
          //   paddingBottom: open ? "1rem" : "0.5rem",
          // }}
          layout
          // style={{ borderRadius: "24px" }}
          className={`nav_radius lowercase z-50 fixed self-center top-4 px-4 pt-2 ${open ? "pb-4" : "pb-2"} flex flex-col space-y-2 items-center border border-neutral-800 bg-neutral-900 bg-opacity-60 backdrop-blur-md shadow-2xl shadow-neutral-950`}
        >
          <AnimatePresence>
            <LayoutGroup id="nav-layout-group">
              <motion.div
                layout
                className="flex flex-row space-x-2 items-center"
              >
                <LayoutGroup>
                  <AnimatePresence mode="popLayout">
                    <motion.div layout className="">
                      <AnimatePresence>
                        <Link
                          href="/"
                          className="group flex flex-row space-x-1 uppercase"
                        >
                          <LayoutGroup>
                            <motion.div
                              layout
                              className="group-hover:opacity-60 transition-all duration-200 ease-in-out"
                            >
                              vidit khandelwal
                            </motion.div>
                            <motion.div layout className={`text-lime-500`}>
                              {pathName == "/" || props.notFound
                                ? "portfolio"
                                : pathName.substring(
                                    1,
                                    pathName.lastIndexOf("/") != 0
                                      ? pathName.indexOf("/", 1)
                                      : pathName.length
                                  )}
                            </motion.div>
                          </LayoutGroup>
                        </Link>
                      </AnimatePresence>
                    </motion.div>
                    <motion.div layout className="">
                      <Hamburger
                        aria-label="hamburger menu button"
                        label="hamburger menu button"
                        size={20}
                        toggle={setOpen}
                        toggled={open}
                      />
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
                        const uuid = uuidv4();
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
                              when: "beforeChildren",
                              staggerChildren: 0.1,
                            }}
                            layout
                            key={uuid}
                            className="flex flex-row space-x-1 items-center"
                          >
                            <LayoutGroup key={uuid}>
                              <AnimatePresence mode="popLayout" key={uuid}>
                                <NavLink
                                  current={pathName == x.href ? true : false}
                                  key={uuid}
                                  href={x.href}
                                  icon={x.icon}
                                >
                                  {x.name}
                                </NavLink>
                              </AnimatePresence>
                            </LayoutGroup>
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
