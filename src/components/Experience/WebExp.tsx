import ExpTitle from "./ExpTitle";
import ExpDate from "./ExpDate";
import ExpCompany from "./ExpCompany";
import ExpBullets from "./ExpBullets";
import ExpSubtitleContainer from "./ExpSubtitleContainer";

const WebExp = () => {
  return (
    <div className="col-span-2 row-span-1 flex flex-col space-y-4 items-start rounded-[3rem] p-8 lg:p-12 text-2xl lg:text-4xl bg-neutral-900 text-neutral-100 font-light">
      <div className="flex flex-col space-y-2 w-full">
        <ExpCompany>DePauw / Web Team</ExpCompany>
        <ExpSubtitleContainer>
          <ExpTitle>Web Developer Intern</ExpTitle>
          <ExpDate>Aug 2020 - Dec 2020</ExpDate>
        </ExpSubtitleContainer>
        <div>
          <ExpBullets>
            <li>
              Achieved an optimization boost of over 60% for DePauw University
              by leveraging powerful SEO tools of BigTree CMS and PageSpeed
              Insights.
            </li>
            <li>
              Designed and implemented a microsite on a LAMP server,
              strategically evaluating and testing potential use cases that
              align with the University&apos;s mission.
            </li>
          </ExpBullets>
        </div>
      </div>
    </div>
  );
};

export default WebExp;
