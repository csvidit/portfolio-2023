import { PiCertificateDuotone } from "react-icons/pi";

const KeySkillsContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row gap-2 flex-wrap items-center text-sm">
      {/* <div className="flex flex-row space-x-1 items-center flex-wrap text-blue-500">
        <span className="uppercase">Key Skills</span>
      </div> */}
      <div className="flex flex-row flex-wrap gap-4">{props.children}</div>
    </div>
  );
};

export default KeySkillsContainer;
