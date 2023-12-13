"use client";

import {
  AnimatePresence,
  LayoutGroup,
  MotionConfig,
  motion,
} from "framer-motion";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Sling as Hamburger } from "hamburger-react";
import Link from "next/link";
import { HiAcademicCap } from "react-icons/hi2";
import {
  PiArticleFill,
  PiBookOpenFill,
  PiCameraFill,
  PiHouseFill,
  PiLightningFill,
  PiSquaresFourFill,
  PiUserFill,
} from "react-icons/pi";
import path from "path";

const definedRoutes = [
  "/",
  "/about",
  "/experience",
  "/academics",
  "/projects",
  "/papers",
  "/photography",
  "/blog",
  "/literature",
  "/terms",
];

const Nav = (props: { notFound?: boolean }) => {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const [croppedPathname, setCroppedPathname] = useState(pathName.substring(0, pathName.indexOf("/", 1) > 1 ? pathName.indexOf("/", 1) : pathName.length));

  useEffect(() => {
    setCroppedPathname(pathName.substring(0, pathName.indexOf("/", 1) > 1 ? pathName.indexOf("/", 1) : pathName.length));
    setOpen(false);
  }, [pathName]);

  const links = [
    { id: "nav-home", name: "Home", href: "/", icon: <PiHouseFill /> },
    { id: "nav-about", name: "About", href: "/about", icon: <PiUserFill /> },
    {
      id: "nav-experience",
      name: "Work Experience",
      href: "/experience",
      icon: <PiLightningFill />,
    },
    {
      id: "nav-academics",
      name: "Academics",
      href: "/academics",
      icon: <HiAcademicCap />,
    },
    {
      id: "nav-projects",
      name: "Projects",
      href: "/projects",
      icon: <PiSquaresFourFill />,
    },
    {
      id: "nav-papers",
      name: "Papers",
      href: "/papers",
      icon: <PiBookOpenFill />,
    },
    // { name: "Literature", href: "/literature", icon: <PiPenFill /> },
    {
      id: "nav-photography",
      name: "Photography",
      href: "/photography",
      icon: <PiCameraFill />,
    },
    { id: "nav-blog", name: "Blog", href: "/blog", icon: <PiArticleFill /> },

    // {
    //   name: "Studio",
    //   href: "https://studio.viditkhandelwal.com",
    //   icon: <BsPaletteFill />,
    // },
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
          className={`nav_radius lowercase z-50 fixed self-center top-4 px-4 pt-2 ${
            open ? "pb-4" : "pb-2"
          } flex flex-col space-y-2 items-center border border-neutral-800 bg-neutral-900 bg-opacity-60 backdrop-blur-md shadow-2xl shadow-neutral-950`}
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
                          className="group flex flex-row space-x-1 uppercase w-max"
                        >
                          <MotionConfig
                            transition={{
                              type: "tween",
                            }}
                          >
                            <LayoutGroup>
                              <motion.div
                                layout
                                className="group-hover:opacity-60 transition-all duration-200 ease-in-out"
                              >
                                vidit khandelwal
                              </motion.div>
                              <motion.div layout className={`text-lime-500`}>
                                {pathName == "/" || props.notFound || !definedRoutes.includes(croppedPathname)
                                  ? "portfolio"
                                  : pathName.substring(
                                      1,
                                      pathName.lastIndexOf("/") != 0
                                        ? pathName.indexOf("/", 1)
                                        : pathName.length
                                    )}
                              </motion.div>
                            </LayoutGroup>
                          </MotionConfig>
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
                        return (
                          // <motion.div
                          //   initial={{ skewY: 20 }}
                          //   animate={{ skewY: 0 }}
                          //   exit={{ skewY: 20 }}
                          //   transition={{
                          //     delay: 0.4,
                          //     type: "spring",
                          //     duration: 0.2,
                          //     stiffness: 200,
                          //     damping: 20,
                          //     when: "beforeChildren",
                          //     staggerChildren: 0.1,
                          //   }}
                          //   layout
                          //   key={uuidv4()}
                          //   className="flex flex-row space-x-1 items-center"
                          // >
                          <LayoutGroup key="nav-links-layout-group">
                            <AnimatePresence
                              mode="popLayout"
                              key="nav-animate-presence"
                            >
                              <NavLink
                                current={croppedPathname == x.href ? true : false}
                                key={x.id}
                                href={x.href}
                                icon={x.icon}
                              >
                                {x.name}
                              </NavLink>
                            </AnimatePresence>
                          </LayoutGroup>
                          // </motion.div>
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
