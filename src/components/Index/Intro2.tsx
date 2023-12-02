import ActionButton from "./ActionButton";
import HeroSubtitles from "./HeroSubtitles";
import OTW2 from "./OTW2";

const Intro2 = () => {
  return (
    <div
      className={`bg-gradient-to-t from-neutral-950 to-indigo-950 via-neutral-950 from-40% via-60% top-0 left-0 w-full col-span-4 rounded-[3rem] p-8 lg:p-12 h-max flex flex-col space-y-8 items-center text-neutral-100`}
    >
      <div className="mt-24 flex flex-col flex-wrap space-y-8 items-center h-fit">
        <h1 className="extended text-4xl lg:text-8xl text-indigo-500 text-center text-medium">
          VIDIT KHANDELWAL
        </h1>
        <HeroSubtitles />
        <ActionButton size="fit" external={false} variant="plain" href="/about">
          More About Me
        </ActionButton>
      </div>
      <OTW2 />
    </div>
  );
};

export default Intro2;
