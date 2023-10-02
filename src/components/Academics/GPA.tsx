import SubSectionHeader from "./SubSectionHeader";
import SubSectionTitle from "./SubSectionTitle";

const GPA = () => {
  return (
    <div className="flex w-full flex-col space-y-4 items-start rounded-2xl text-neutral-100 font-light">
      <SubSectionHeader color="red">gpa</SubSectionHeader>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2 lg:row-span-2">
          <p className="text-lg lg:text-xl text-red-500">Cumulative</p>
          <p className="text-2xl lg:text-6xl geom">3.87</p>
        </div>
        <div className="flex flex-col space-y-2 lg:row-span-1">
          <p className="text-lg lg:text-xl text-red-500">Computer Science</p>
          <p className="text-2xl lg:text-4xl geom">3.87</p>
        </div>
        <div className="flex flex-col space-y-2 lg:row-span-1">
          <p className="text-lg lg:text-xl text-red-500">Economics</p>
          <p className="text-2xl lg:text-4xl geom">3.80</p>
        </div>
      </div>
    </div>
  );
};

export default GPA;
