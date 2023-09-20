import { PiBriefcaseDuotone } from "react-icons/pi";

const OTW = () => {
  return (
    <div
      className={`col-span-1 lg:col-span-4 text-2xl lg:text-4xl lg:justify-between flex flex-col lg:items-center rounded-[3rem] p-8 lg:p-12 space-y-4 lg:space-y-0 lg:flex-row lg:space-x-8 text-lime-500 bg-neutral-900`}
    >
      <div className="geom flex flex-row space-x-4 items-center">
        <div className="animate-pulse"><PiBriefcaseDuotone/></div>
        <div>open to work</div>
      </div>
      <div className="lg:text-2xl text-neutral-100 font-light">
        Software Engineer, Web Developer, UI Engineer positions
      </div>
    </div>
  );
};

export default OTW;
