import SubSectionHeader from "./SubSectionHeader";
import SubSectionText from "./SubSectionText";
import SubSectionTitle from "./SubSectionTitle";

const Coursework = () => {
  return (
    <div className="flex w-full flex-col space-y-4 items-start rounded-2xl text-neutral-100 font-light">
      <SubSectionHeader>Selected Coursework</SubSectionHeader>
      <div className="w-full flex flex-col space-y-4">
        <div className="w-full flex flex-col space-y-2">
          <SubSectionTitle>Computer Science</SubSectionTitle>
          <div className="w-full flex flex-col space-y-2 lg:grid lg:grid-cols-3 lg:grid-rows-4 lg:space-y-0 lg:gap-2">
            <SubSectionText>Data Structures</SubSectionText>
            <SubSectionText>Object Oriented Software Development</SubSectionText>
            <SubSectionText>Mobile App Development</SubSectionText>
            <SubSectionText>Artificial Intelligence</SubSectionText>
            <SubSectionText>Computer Systems</SubSectionText>
            <SubSectionText>Computer Security</SubSectionText>
            <SubSectionText>Graphics</SubSectionText>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-2">
          <SubSectionTitle>Economics</SubSectionTitle>
          <div className="w-full flex flex-col space-y-2 lg:grid lg:grid-cols-3 lg:grid-rows-2 lg:space-y-0 lg:gap-2">
            <SubSectionText>Intermediate Microeconomics</SubSectionText>
            <SubSectionText>Intermediate Macroeconomics</SubSectionText>
            <SubSectionText>Statistics for Economics and Management</SubSectionText>
            <SubSectionText>Development Economics</SubSectionText>
            <SubSectionText>International Economics</SubSectionText>
            <SubSectionText>Financial Accounting</SubSectionText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coursework;
