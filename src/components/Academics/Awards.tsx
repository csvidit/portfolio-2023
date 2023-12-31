import SubSectionHeader from "./SubSectionHeader";
import SubSectionText from "./SubSectionText";
import SubSectionTitle from "./SubSectionTitle";

const Awards = () => {
  return (
    <div className="flex w-full flex-col space-y-4 items-start rounded-2xl text-neutral-100 font-light">
      <SubSectionHeader color="red">awards</SubSectionHeader>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-2">
          <SubSectionTitle>
            Outstanding Service to the Computer Science Department
          </SubSectionTitle>
          <SubSectionText>
            This award is presented annually by the Computer Science Faculty to
            a Computer Science Major who contributes exceptional service to one
            of the department&apos;s programs.
          </SubSectionText>
        </div>
        <div className="flex flex-col space-y-2">
          <SubSectionTitle>Computer Science Honor Society</SubSectionTitle>
          <SubSectionText>
            The DePauw University Computer Science Department Honor Society
            recognizes computer science majors who have demonstrated superior
            performance in their computer science coursework. They must have a
            major GPA above 3.75.
          </SubSectionText>
        </div>
        <div className="flex flex-col space-y-2">
          <SubSectionTitle>
            Steve and Michelle Trulaske International Scholarship for Off-Campus
            Study
          </SubSectionTitle>
          <SubSectionText>
            Received by qualified students who are successful in their
            application to a off-campus domestic or international study or
            exchange program.
          </SubSectionText>
        </div>
        <div className="flex flex-col space-y-2">
          <SubSectionTitle>Latin Honors - Summa Cum Laude</SubSectionTitle>
          <SubSectionText>
            Highest category of graduation honors, awarded to students who have
            a GPA above 3.8 in the College of Liberal Arts.
          </SubSectionText>
        </div>
        <div className="flex flex-col space-y-2">
          <SubSectionTitle>Dean&apos;s List, all semesters</SubSectionTitle>
          <SubSectionText>
            Eligibility is based on the completion of at least three courses in
            a primary term (Fall or Spring) with a 3.5 semester GPA or better
            with no incomplete or failing grades.
          </SubSectionText>
        </div>
        <div className="flex flex-col space-y-2">
          <SubSectionTitle>University Merit Scholarship</SubSectionTitle>
          <SubSectionText>
            Received one of the highest merit scholarships offered by DePauw.
          </SubSectionText>
        </div>
      </div>
    </div>
  );
};

export default Awards;
