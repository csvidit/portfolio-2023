import SubSectionHeader from "./SubSectionHeader";
import SubSectionText from "./SubSectionText";
import SubSectionTitle from "./SubSectionTitle";

const OxfordExtracurriculars = () => {
  return (
    <div className="flex w-full flex-col space-y-4 items-start rounded-2xl text-neutral-100 font-light">
      <SubSectionHeader color="red">extracurriculars</SubSectionHeader>
      <div className="w-full flex flex-col space-y-4">
        <div className="w-full flex flex-col space-y-2">
          <SubSectionTitle>Oxford Union Society</SubSectionTitle>
          <SubSectionText>
            The Oxford Union society, founded in 1823, is a prestigious debating
            society located at the University of Oxford, known for its rich
            history, esteemed guest speakers, and stimulating intellectual
            discussions.
          </SubSectionText>
        </div>
        <div className="w-full flex flex-col space-y-2">
          <SubSectionTitle>
            Taylor Swift Society
          </SubSectionTitle>
          <SubSectionText>
           A student-run club devoted to celebrating Taylor Swift through music nights and get-togethers, because she never goes out of style (pun intended).
          </SubSectionText>
        </div>
        <div className="w-full flex flex-col space-y-2">
          <SubSectionTitle>New College Junior Common Room</SubSectionTitle>
          <SubSectionText>
           The undergraduate student council of New College, representing the interests and welfare of all. 
          </SubSectionText>
        </div>
      </div>
    </div>
  );
};

export default OxfordExtracurriculars;
