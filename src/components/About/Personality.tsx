import Image from "next/image";

const Personality = () => {
  return (
    <div className="lg:col-span-3 row-span-1 w-100 h-100 flex flex-col space-y-8 rounded-[3rem] p-8 lg:p-12 bg-neutral-900">
      <h2 className="flex geom grow text-4xl lg:text-6xl text-indigo-500">
        i also...
      </h2>
      <div className="grid lg:grid-cols-3 gap-4 font-light text-xl lg:text-2xl geom">
        <div className="flex flex-col space-y-2 items-start">
          <div className="relative w-24 h-24">
            <Image
              src="/takeaway-cup-dynamic-color.png"
              fill
              alt="Takeaway cup icon object-contain"
            />
          </div>
          <div className="text-neutral-500">
            like getting a large iced latte with friends
          </div>
        </div>
        <div className="flex flex-col space-y-2 items-start">
          <div className="relative w-24 h-24">
            <Image
              src="/headphone-dynamic-color.png"
              fill
              alt="Takeaway cup icon object-contain"
            />
          </div>
          <div className="text-neutral-500">
            listen to the most basic pop music
          </div>
        </div>
        <div className="flex flex-col space-y-2 items-start">
          <div className="relative w-24 h-24">
            <Image
              src="/computer-dynamic-color.png"
              fill
              alt="Takeaway cup icon object-contain"
            />
          </div>
          <div className="text-neutral-500">binge watch tv shows in bed</div>
        </div>
      </div>
    </div>
  );
};

export default Personality;
