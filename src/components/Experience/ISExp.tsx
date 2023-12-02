import ExpTitle from "./ExpTitle";
import ExpDate from "./ExpDate";
import ExpBullets from "./ExpBullets";
import ExpCompany from "./ExpCompany";
import ExpSubtitleContainer from "./ExpSubtitleContainer";
import KeySkillsContainer from "./KeySkillsContainer";
import KeySkillItem from "./KeySkillItem";
import { SiMacos, SiWindows10 } from "react-icons/si";
import { MdHardware } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";

const ISExp = () => {
  return (
    <div className="col-span-2 row-span-1 flex flex-col space-y-4 justify-between items-start rounded-[3rem] p-8 lg:p-12 text-2xl lg:text-4xl bg-neutral-900 text-neutral-100 font-light">
      <div className="flex flex-col space-y-2 w-full">
        <ExpCompany>DePauw / Information Services</ExpCompany>
        <ExpSubtitleContainer>
          <ExpTitle>IT Engineer Intern</ExpTitle>
          <ExpDate>Jun 2021 - Aug 2021</ExpDate>
        </ExpSubtitleContainer>
        <div>
          <ExpBullets>
            <li>
              Successfully collaborated with IT professionals to deploy new
              hardware and software solutions on 50+ locations across campus and
              online.
            </li>
            <li>
              Managed the Help Desk and online task ticketing system, ensuring
              adherence to established workflows and completion of 95% of open
              tickets within 30 minutes.
            </li>
          </ExpBullets>
        </div>
      </div>
      <KeySkillsContainer>
        <KeySkillItem icon={<MdHardware/>}>Windows Hardware</KeySkillItem>
        <KeySkillItem icon={<SiMacos/>}>macOS</KeySkillItem>
        <KeySkillItem icon={<SiWindows10/>}>Windows Server</KeySkillItem>
        <KeySkillItem icon={<RiCustomerServiceFill/>}>Client Services</KeySkillItem>
      </KeySkillsContainer>
    </div>
  );
};

export default ISExp;
