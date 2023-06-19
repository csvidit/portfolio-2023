import { motion } from "framer-motion";
import Link from "next/link";
import { UrlObject } from "url";

const InlineButton = (props: {
  href: string | UrlObject;
  children: React.ReactNode;
  color: string;
}) => {
  const mainDivVariants = { initial: {}, hover: {} };
  const underlineVariants = {
    initial: {
      width: "66.67%",
      height: "1px",
      transition: {
        type: "spring",
        duration: 0.2,
        damping: 20,
        stiffness: 200,
      },
    },
    hover: {
      width: "100%",
      height: "1px",
      transition: {
        type: "spring",
        duration: 0.2,
        damping: 20,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.div
      variants={mainDivVariants}
      initial="initial"
      whileHover="hover"
      layout
      className="flex flex-col space-x-1 text-xl lg:text-2xl"
    >
      <Link
        href={props.href}
        className={`flex flex-col space-y-1 items-start w-fit h-fit text-${props.color}`}
      >
        <motion.div className="flex flex-row space-x-1 items-center">
          {props.children}
        </motion.div>
        <motion.div
          variants={underlineVariants}
          className={`bg-${props.color}`}
        ></motion.div>
      </Link>
    </motion.div>
  );
};

export default InlineButton;
