import ExpCompany from "./ExpCompany";
import ExpBullets from "./ExpBullets";
import ExpSubtitleContainer from "./ExpSubtitleContainer";
import ExpTitle from "./ExpTitle";

const ITAPExp = () => {
  return (
    <div className="col-span-2 row-span-1 flex flex-col space-y-4 items-start rounded-[3rem] p-8 lg:p-12 text-2xl lg:text-4xl bg-neutral-900 text-neutral-100 font-light">
      <div className="flex flex-col space-y-2 w-full">
        <ExpCompany>DePauw / ITAP Institue</ExpCompany>
        <ExpSubtitleContainer>
          <ExpTitle>ITAP Intern</ExpTitle>
          <div className="text-neutral-500 text-base">
            Aug 2019 - May 2020
          </div>
        </ExpSubtitleContainer>
        <div>
          <ExpBullets>
            <li>
              First-year internship program for the highly selective ITAP honors
              program at DePauw University that accepts just 20% of applicants.
            </li>
            <li>
              Enhanced classroom experiences using data visualization
              technologies such as Tableau and ArcGIS, increasing student
              engagement by over 50%.
            </li>
          </ExpBullets>
        </div>
      </div>
    </div>
  );
};

export default ITAPExp;
