"use client";

import ExpTitle from "../Experience/ExpTitle";
import ExpCompany from "../Experience/ExpCompany";
import ExpDate from "../Experience/ExpDate";
import OxfordCoursework from "./OxfordCoursework";
import OxfordExtracurriculars from "./OxfordExtracurriculars";
import OxfordGPA from "./OxfordGPA";
import MainGridItem from "../MainGridItem";

const Oxford = () => {
  return (
    <>
      <div id="oxford" className="col-span-4 row-span-1 flex flex-col space-y-4 items-start rounded-[3rem] p-8 lg:p-12 text-2xl lg:text-4xl bg-neutral-900 text-neutral-100 font-light">
        <div className="flex flex-col space-y-2 w-full">
          <ExpCompany>New College, University of Oxford</ExpCompany>
          <ExpTitle variant="academic">
            Visiting Student, International Economics
          </ExpTitle>
          <ExpDate>Fall 2022</ExpDate>
        </div>
      </div>
      <MainGridItem width={2} height={2}>
        <OxfordCoursework />
      </MainGridItem>
      <MainGridItem width={2} height={1}>
        <OxfordGPA />
      </MainGridItem>
      <MainGridItem width={2} height={1}>
        <OxfordExtracurriculars />
      </MainGridItem>
    </>
  );
};

export default Oxford;
