import { motion } from "framer-motion";

const ProjectIconsContainer = (props: { children: React.ReactNode }) => {
  return (
    <motion.div className="flex flex-row space-x-4 items-center text-xl lg:text-2xl">
      {props.children}
    </motion.div>
  );
};

export default ProjectIconsContainer;
