import SubSectionHeader from "./SubSectionHeader";
import SubSectionTitle from "./SubSectionTitle";

const OxfordGPA = () => {
  return (
    <div className="lg:w-1/3 flex w-full flex-col space-y-4 items-start rounded-2xl text-neutral-100 font-light">
      <SubSectionHeader color="red">
        GPA (converted to the U.S. 4.0 scale)
      </SubSectionHeader>
      <SubSectionTitle>Semester GPA</SubSectionTitle>
      <p className="text-2xl lg:text-4xl geom">3.85</p>
    </div>
  );
};

export default OxfordGPA;
