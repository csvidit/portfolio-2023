import PaperFilterItems from "./PaperFilterItems";

const PaperFiltersDesktop = (props: { activeFilter: number }) => {
  return (
    <div
      className={`flex flex-col space-y-2 col-span-4 rounded-[3rem] p-8 py-6 lg:p-12 lg:py-8 bg-neutral-900 lg:text-6xl`}
    >
      <div className="flex flex-row flex-wrap gap-2 items-center">
       <PaperFilterItems activeFilter={props.activeFilter}/>
      </div>
    </div>
  );
};

export default PaperFiltersDesktop;