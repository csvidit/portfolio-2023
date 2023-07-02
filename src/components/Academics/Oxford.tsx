"use client";

import { motion } from "framer-motion";
import ExpTitle from "../Experience/ExpTitle";
import ExpCompany from "../Experience/ExpCompany";
import ExpDate from "../Experience/ExpDate";
import ActionButton from "../Index/ActionButton";
import OxfordCoursework from "./OxfordCoursework";
import OxfordExtracurriculars from "./OxfordExtracurriculars";

const Oxford = () => {
  return (
    <div className="col-span-4 row-span-1 flex flex-col space-y-4 items-start rounded-[3rem] p-8 lg:p-12 text-2xl lg:text-4xl bg-neutral-900 text-neutral-100 font-light">
      <div className="flex flex-col space-y-2 w-full">
        <ExpCompany>New College, University of Oxford</ExpCompany>
        <ExpTitle variant="academic">
          Visiting Student, International Economics
        </ExpTitle>
        <ExpDate>Fall 2022</ExpDate>
      </div>
      <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8">
        <OxfordCoursework />
        <OxfordExtracurriculars />
      </div>

      <ActionButton
      size="fit"
        variant="academic"
        external={true}
        href="https://depauw.edu"
      >
        New College
      </ActionButton>
    </div>
  );
};

export default Oxford;
