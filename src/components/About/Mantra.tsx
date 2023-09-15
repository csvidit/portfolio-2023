import { TbWheel } from "react-icons/tb";
import MainGridItem from "../MainGridItem";

const Mantra = () => {
  return (
    <MainGridItem width={4} height={1}>
      <h2 className="flex geom grow text-4xl lg:text-6xl text-blue-500">
        my mantras
      </h2>
      <div className="grid lg:grid-cols-3 gap-x-16 gap-y-4 font-light text-xl lg:text-2xl geom">
        <div className="flex flex-col space-y-4 items-start">
          <div className="px-4 py-2 flex flex-rowitems-center w-full text-center rounded-full bg-blue-950 text-blue-500">
            do not reinvent the wheel
          </div>
          <div className="text-neutral-500">
            Embrace existing libraries and approaches &#8212; utilizing
            available resources is as vital as innovation.
          </div>
        </div>
        <div className="flex flex-col space-y-4 items-start justify">
          <div className="px-4 py-2 flex flex-row items-center w-full text-center rounded-full bg-blue-950 text-blue-500">
            mvp first
          </div>
          <div className="text-neutral-500">
            Begin with simplicity &#8212; add bells and whistles only when
            necessary.
          </div>
        </div>
        <div className="flex flex-col space-y-4 items-start justify">
          <div className="px-4 py-2 flex flex-row items-center w-full text-center rounded-full bg-blue-950 text-blue-500">
            full-stack always
          </div>
          <div className="text-neutral-500">
            Be BOTH the jack and master of all trades.
          </div>
        </div>
      </div>
    </MainGridItem>
  );
};

export default Mantra;
