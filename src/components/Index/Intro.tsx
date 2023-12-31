import HeroSubtitles from "./HeroSubtitles";
import ActionLink from "../ActionLink";
import OTW from "./OTW";

const Intro = () => {
  return (
    <div
      className={`col-span-1 lg:col-span-4 lg:row-span-4 flex flex-col space-y-24 justify-start rounded-[3rem] p-8 lg:p-12 items-center`}
    >
      <div className="flex flex-col flex-wrap space-y-8 h-fit items-center text-center">
        <h1 className="extended text-4xl lg:text-8xl text-indigo-500 text-medium uppercase">
          Vidit Khandelwal
        </h1>
        {/* <h2 className="text-2xl lg:text-4xl text-neutral-100 text-medium">A passionate software engineer with a focus on the frontend</h2> */}
        <HeroSubtitles />
        <ActionLink size="fit" variant="plain" href="/about">
          More About Me
        </ActionLink>
      </div>
      <OTW />
    </div>
  );
};

export default Intro;
