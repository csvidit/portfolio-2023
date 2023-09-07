import { motion } from "framer-motion";
import PaperFilterItem from "./PaperFilterItem";
import { Dispatch, SetStateAction } from "react";
import { tags } from "./PaperItem";
import Filters from "./Filters";

const PaperFilters = (props: {
  activeFilter: number;
  setActiveFilter: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <motion.div
      className={`flex flex-col space-y-2 col-span-4 rounded-[3rem] p-8 lg:p-12 bg-neutral-900 lg:text-6xl`}
    >
      <motion.div className="text-red-500 font-light text-lg lg:text-xl">
        filter by topic
      </motion.div>
      <motion.div className="flex flex-row flex-wrap space-x-2 items-center">
        <PaperFilterItem
          isActive={props.activeFilter == Filters.All}
          setActiveFilter={props.setActiveFilter}
          tag={Filters.All}
        >
          {tags[Filters.All]}
        </PaperFilterItem>
        <PaperFilterItem
          isActive={props.activeFilter == Filters.Development_Economics}
          setActiveFilter={props.setActiveFilter}
          tag={Filters.Development_Economics}
        >
          {tags[Filters.Development_Economics]}
        </PaperFilterItem>
        <PaperFilterItem
          isActive={props.activeFilter == Filters.International_Business}
          setActiveFilter={props.setActiveFilter}
          tag={Filters.International_Business}
        >
          {tags[Filters.International_Business]}
        </PaperFilterItem>
        <PaperFilterItem
          isActive={props.activeFilter == Filters.International_Finance}
          setActiveFilter={props.setActiveFilter}
          tag={Filters.International_Finance}
        >
          {tags[Filters.International_Finance]}
        </PaperFilterItem>
      </motion.div>
    </motion.div>
  );
};

export default PaperFilters;
