import ExpBullets from "../Experience/ExpBullets";
import SecondaryButton from "../SecondaryButton";
import SubSectionHeader from "./SubSectionHeader";
import SubSectionText from "./SubSectionText";
import SubSectionTitle from "./SubSectionTitle";

const Extracurriculars = () => {
  return (
    <div className="flex w-full flex-col space-y-4 items-start rounded-2xl text-neutral-100 font-light">
      <SubSectionHeader color="red">Selected Extracurriculars</SubSectionHeader>
      <div className="w-full flex flex-col space-y-4">
        <div className="w-full flex flex-col space-y-2">
          <SubSectionTitle>
            Co-Founder, DePauw International Computer Science Association
          </SubSectionTitle>
          <ExpBullets>
            <li>
              Coordinated seminars on topics ranging such as Networking and Web
              Development, with 80% of attendees reporting increase in
              knowledge.
            </li>
            <li>
              Established the PR strategy, making ICSA one of the most
              successful organizations on campus, with event attendance
              exceeding 60% of all CS majors.
            </li>
            <li>
              Supervised the operational framework of the organization by
              overseeing contracts, access to documents, and constitutional
              adherence, resulting in 50% increase in operational efficiency
              compared to similar organizations.
            </li>
          </ExpBullets>
        </div>
        <div className="w-full flex flex-col space-y-2">
          <SubSectionTitle>
            International Student Ambassador, International Student Affairs
          </SubSectionTitle>
          <ExpBullets>
            <li>
              Mentored 100+ incoming international students to aid in their
              successful transition to the United States and DePauw&apos;s
              campus.
            </li>
            <li>
              Conducted the 5-day International Orientation along with 10
              ambassadors, with 8 information sessions, ice-breakers, and round
              the clock support.
            </li>
          </ExpBullets>
        </div>
        <div className="w-full flex flex-col space-y-2">
          <SubSectionTitle>
            Board Member, International Student Association
          </SubSectionTitle>
          <ExpBullets>
            <li>
              Organized 5+ virtual and hybrid events to support the
              international student community during the COVID-19 pandemic,
              improving mental well-being.
            </li>
            <li>
              Managed promotional email campaigns and administered the
              organization&apos;s Discord, catering to 400+ international
              students spread across the world.
            </li>
          </ExpBullets>
        </div>
        <div className="w-full flex flex-col space-y-2">
          <SubSectionTitle>Board Member, DePauw Dharma Club</SubSectionTitle>
        </div>
        <div className="w-full flex flex-col space-y-2">
          <SubSectionTitle>
            Board Member, International Student Advisory Board
          </SubSectionTitle>
        </div>
        {/* <SecondaryButton
          external={true}
          variant="academic"
          href="https://www.icloud.com/iclouddrive/06fIUJofAuiq28fvMni89i64w#Vidit_Khandelwal_Resume_27-Jun-23"
        >
          For more details on my extracurriculars, check out my resume.
        </SecondaryButton> */}
      </div>
    </div>
  );
};

export default Extracurriculars;
