import ExpTitle from "./ExpTitle";
import ExpDate from "./ExpDate";
import ExpBullets from "./ExpBullets";
import ExpCompany from "./ExpCompany";
import ExpSubtitleContainer from "./ExpSubtitleContainer";
import KeySkillsContainer from "./KeySkillsContainer";
import KeySkillItem from "./KeySkillItem";
import { SiAffinitydesigner, SiCanva, SiGotomeeting, SiMailchimp } from "react-icons/si";
import { PiStrategyFill } from "react-icons/pi";

const HubbardExp = () => {
  return (
    <div className="col-span-2 row-span-1 flex flex-col space-y-4 justify-between items-start rounded-[3rem] p-8 lg:p-12 text-2xl lg:text-4xl bg-neutral-900 text-neutral-100 font-light">
      <div className="flex flex-col space-y-2 w-full">
        <ExpCompany>DePauw / Hubbard Center</ExpCompany>
        <ExpSubtitleContainer>
          <ExpTitle>Marketing Intern</ExpTitle>
          <ExpDate>Nov 2021 - May 2022</ExpDate>
        </ExpSubtitleContainer>
        <div>
          <ExpBullets>
            <li>
            Implemented a new marketing strategy to bolster the efforts of the career center through strategy meetings with directors, increasing reach by 50%.
            </li>
            <li>
              Delegated work to the team in weekly meetings to timely and
              effective marketing of events to 1700+ students using an
              omni-channel approach.
            </li>
          </ExpBullets>
        </div>
      </div>
      <KeySkillsContainer>
        <KeySkillItem icon={<SiCanva/>}>Canva</KeySkillItem>
        <KeySkillItem icon={<SiAffinitydesigner/>}>Affinity Designer</KeySkillItem>
        <KeySkillItem icon={<SiMailchimp/>}>Mailchimp</KeySkillItem>
        <KeySkillItem icon={<SiGotomeeting/>}>Delegating Tasks</KeySkillItem>
        <KeySkillItem icon={<PiStrategyFill/>}>Strategizing</KeySkillItem>
      </KeySkillsContainer>
    </div>
  );
};

export default HubbardExp;
