import HeroSubtitles from "./HeroSubtitles";
import ActionButton from "./ActionButton";
import OTW from "./OTW";

const Intro = () => {
  return (
    <div
      className={`col-span-1 lg:col-span-4 lg:row-span-4 flex flex-col space-y-24 justify-start rounded-[3rem] p-8 lg:p-12 items-center`}
    >
      <div className="flex flex-col flex-wrap space-y-8 items-center h-fit">
        <h1 className="extended text-4xl lg:text-8xl text-indigo-500 text-center text-medium">
          VIDIT KHANDELWAL
        </h1>
        <HeroSubtitles />
        <ActionButton size="fit" external={false} variant="plain" href="/about">
          More About Me
        </ActionButton>
      </div>
      <OTW />
    </div>
  );
};

export default Intro;
