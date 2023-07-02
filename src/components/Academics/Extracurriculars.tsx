import SecondaryButton from "../SecondaryButton";
import SubSectionHeader from "./SubSectionHeader";
import SubSectionText from "./SubSectionText";
import SubSectionTitle from "./SubSectionTitle";

const Extracurriculars = () => {
  return (
    <div className="flex w-full flex-col space-y-4 items-start rounded-2xl text-neutral-100 font-light">
      <SubSectionHeader>Selected Extracurriculars</SubSectionHeader>
      <div className="w-full flex flex-col space-y-4">
        <div className="w-full flex flex-col space-y-2">
          <SubSectionText>
            Co-Founder, DePauw International Computer Science Association
          </SubSectionText>
        </div>
        <div className="w-full flex flex-col space-y-2">
          <SubSectionText>International Student Ambassador, International Student Affairs</SubSectionText>
        </div>
        <div className="w-full flex flex-col space-y-2">
          <SubSectionText>
            Board Member, International Student Association
          </SubSectionText>
        </div>
        <div className="w-full flex flex-col space-y-2">
          <SubSectionText>
            Board Member, DePauw Dharma Club
          </SubSectionText>
        </div>
        <div className="w-full flex flex-col space-y-2">
          <SubSectionText>
            Board Member, International Student Advisory Board
          </SubSectionText>
        </div>
        <SecondaryButton
          external={true}
          variant="academic"
          href="https://www.icloud.com/iclouddrive/06fIUJofAuiq28fvMni89i64w#Vidit_Khandelwal_Resume_27-Jun-23"
        >
          For more details on my extracurriculars, check out my resume.
        </SecondaryButton>
      </div>
    </div>
  );
};

export default Extracurriculars;
