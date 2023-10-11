import { AnimatePresence, motion } from "framer-motion";

const MessageItem = (props: { type: string; children: React.ReactNode, id: number}) => {

  return (
    <AnimatePresence>
      <motion.div id={props.id.toString()} className={`relative rounded-2xl ${props.type == "user" ? "bg-blue-600 self-end rounded-r-md" : "bg-neutral-800 rounded-l-lg"} text-neutral-100 w-fit`}>
        <motion.div className="px-4 py-2">{props.children}</motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MessageItem;
