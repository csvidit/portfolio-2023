import ExpTitle from "../Experience/ExpTitle";
import ExpCompany from "../Experience/ExpCompany";
import ExpDate from "../Experience/ExpDate";
import Awards from "./Awards";
import GPA from "./GPA";
import Coursework from "./Coursework";
import ActionButton from "../Index/ActionButton";
import Extracurriculars from "./Extracurriculars";
import Tooltip from "../Tooltip";

const DePauw = () => {
  return (
    <div className="col-span-4 row-span-1 flex flex-col space-y-8 items-start rounded-[3rem] p-8 lg:p-12 text-2xl lg:text-4xl bg-neutral-900 text-neutral-100 font-light">
      <div className="flex flex-col space-y-8 w-full">
        <div className="flex flex-col space-y-2">
          <ExpCompany>DePauw University</ExpCompany>
          <ExpTitle variant="academic">
            <span>
              Bachelor of Arts in Computer Science with a minor in Economics
            </span>
            <Tooltip>
              Since DePauw is a liberal-arts college, degrees in the sciences are also BAs.
            </Tooltip>
          </ExpTitle>
          <ExpDate>August 2019 - May 2023</ExpDate>
        </div>
        <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8">
          <Awards />
          <GPA />
        </div>
        <Coursework />
        <Extracurriculars />
      </div>
      <ActionButton
        size="fit"
        variant="academic"
        external={true}
        href="https://depauw.edu"
      >
        DePauw University
      </ActionButton>
    </div>
  );
};

export default DePauw;
