import EducationTitle from "./EducationTitle";
import EducationDescription from "./EducationDescription";
import EducationItem from "./EducationItem";
import ActionLink from "../ActionLink";

const Education = () => {
  return (
    <div className="lg:col-span-2 row-span-2 w-100 h-100 flex flex-col space-y-8 rounded-[3rem] p-8 lg:p-12 bg-neutral-900">
      <h2
        
        className="flex geom grow text-4xl lg:text-6xl text-red-500"
      >
        academics
      </h2>
      <EducationItem>
        <EducationTitle>DePauw University</EducationTitle>
        <EducationDescription>
          BA, Computer Science + Economics minor
        </EducationDescription>
        <EducationDescription>Aug 2019 - May 2023</EducationDescription>
      </EducationItem>
      <EducationItem>
        <EducationTitle>New College, University of Oxford</EducationTitle>
        <EducationDescription>
          Visiting Student, International Business and Creative Writing
        </EducationDescription>
        <EducationDescription>Sep 2022 - Dec 2022</EducationDescription>
      </EducationItem>
      <ActionLink size="full" external={false} variant="academic" href="/academics">In Detail</ActionLink>
    </div>
  );
};

export default Education;
