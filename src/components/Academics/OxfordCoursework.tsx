import SubSectionHeader from "./SubSectionHeader";
import SubSectionText from "./SubSectionText";
import SubSectionTitle from "./SubSectionTitle";

const OxfordCoursework = () => {
  return (
    <div className="flex w-full lg:w-2/3 flex-col space-y-4 items-start rounded-2xl text-neutral-100 font-light">
      <SubSectionHeader color="red">coursework (tutorials)</SubSectionHeader>
      <div className="w-full flex flex-col space-y-4">
        <div className="w-full flex flex-col space-y-2">
          <SubSectionTitle>
            International Economics (primary tutorial)
          </SubSectionTitle>
          <SubSectionText>
            Intensive 10-page research paper based tutorials under the
            supervision of Edward Hadas, research fellow at Blackfriars Hall,
            University of Oxford. Topics discussed included global value chains
            in the context of COVID-19, international financial crises, the
            impossible trinity, development trajectories of India versus China,
            and multinational corporations.
          </SubSectionText>
        </div>
        <div className="w-full flex flex-col space-y-2">
          <SubSectionTitle>
            Creative Writing (secondary tutorial)
          </SubSectionTitle>
          <SubSectionText>
            Advanced training in prose and poetry writing using a variety of
            styles, under the supervision of Dr Kieron Winn, who has taught in
            multiple Oxford colleges, including Christ Church. Writing styles
            explored included absurdist, horror, and James Joyce-inspired.
          </SubSectionText>
        </div>
        <div className="w-full flex flex-col space-y-2">
          <SubSectionTitle>C.S. Lewis (seminar)</SubSectionTitle>
          <SubSectionText>
            Writing seminar which consisted of analyzing three C.S. Lewis books
            - Mere Christianity, Till We Have Faces, and The Great Divorce.
            Wrote papers analyzing one or more aspects of each book, under the
            supervision of Dr Cosima Gillhammer, lecturer at Trinity College
            Oxford.
          </SubSectionText>
        </div>
      </div>
    </div>
  );
};

export default OxfordCoursework;
