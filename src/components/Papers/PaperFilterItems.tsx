import { urls, Filters, tags } from "./Filters";
import PaperFilterItem from "./PaperFilterItem";
import {v4 as uuidv4} from "uuid";

const PaperFilterItems = (props: {activeFilter: number}) => {
  return (
    <>
      <PaperFilterItem
        key={uuidv4()}
        href={urls[Filters.All]}
        isActive={props.activeFilter == Filters.All}
        tag={Filters.All}
      >
        {tags[Filters.All]}
      </PaperFilterItem>
      <PaperFilterItem
        key={uuidv4()}
        href={urls[Filters.Development_Economics]}
        isActive={props.activeFilter == Filters.Development_Economics}
        tag={Filters.Development_Economics}
      >
        {tags[Filters.Development_Economics]}
      </PaperFilterItem>
      <PaperFilterItem
        key={uuidv4()}
        href={urls[Filters.International_Business]}
        isActive={props.activeFilter == Filters.International_Business}
        tag={Filters.International_Business}
      >
        {tags[Filters.International_Business]}
      </PaperFilterItem>
      <PaperFilterItem
        key={uuidv4()}
        href={urls[Filters.International_Finance]}
        isActive={props.activeFilter == Filters.International_Finance}
        tag={Filters.International_Finance}
      >
        {tags[Filters.International_Finance]}
      </PaperFilterItem>
    </>
  );
};

export default PaperFilterItems;