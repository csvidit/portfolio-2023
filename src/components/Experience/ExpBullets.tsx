import { motion } from "framer-motion";

const ExpBullets = (props: { children: React.ReactNode }) => {
  return (
    <motion.ul className="flex flex-col space-y-1 text-base text-neutral-300 list-disc">
      {props.children}
    </motion.ul>
  );
};

export default ExpBullets;
