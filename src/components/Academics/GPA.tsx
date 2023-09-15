import SubSectionHeader from "./SubSectionHeader";
import SubSectionTitle from "./SubSectionTitle";

const GPA = () => {
  return (
    <div className="lg:w-1/3 flex w-full flex-col space-y-4 items-start rounded-2xl text-neutral-100 font-light">
      <SubSectionHeader color="red">GPA (on a 4.0 scale)</SubSectionHeader>
      <div className="flex flex-col space-y-4 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:space-y-0 lg:gap-4 lg:items-center">
        <div className="flex flex-col space-y-2 lg:row-span-2">
          <SubSectionTitle>Cumulative</SubSectionTitle>
          <p className="text-2xl lg:text-6xl geom">3.87</p>
        </div>
        <div className="flex flex-col space-y-2 lg:row-span-1">
          <SubSectionTitle>Computer Science</SubSectionTitle>
          <p className="text-2xl lg:text-4xl geom">3.85</p>
        </div>
        <div className="flex flex-col space-y-2 lg:row-span-1">
          <SubSectionTitle>Economics</SubSectionTitle>
          <p className="text-2xl lg:text-4xl geom">3.85</p>
        </div>
      </div>
    </div>
  );
};

export default GPA;
