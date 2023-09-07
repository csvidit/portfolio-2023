import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

const mainDivVariants = {
  initial: {
    backgroundColor: "#0a0a0a",
    color: "#737373",
    borderWidth: "1px",
    borderColor: "#171717",
  },
  hover: {
    backgroundColor: "#171717",
    color: "#d4d4d4",
    borderWidth: "1px",
    borderColor: "#525252",
  },
  focus: {
    backgroundColor: "#7f1d1d",
    color: "#fca5a5",
    borderWidth: "1px",
    borderColor: "#fca5a5",
  },
};

const PaperFilterItem = (props: {
  isActive: boolean
  setActiveFilter: Dispatch<SetStateAction<number>>
  tag: number;
  children: React.ReactNode;
}) => {
  return (
    <motion.button
      className="w-fit px-2 py-1 bg-neutral-950 rounded-md uppercase text-base"
      initial="initial"
      whileHover="hover"
      whileFocus="focus"
      variants={mainDivVariants}
      onClick={() => {
        console.log("Hello");
      }}
    >
      {props.children}
    </motion.button>
  );
};

export default PaperFilterItem;
