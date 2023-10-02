import { TbWheel } from "react-icons/tb";
import MainGridItem from "../MainGridItem";
import MantraTitle from "./MantraTitle";

const Mantra = () => {
  return (
    <MainGridItem width={4} height={1}>
      <h2 className="flex geom grow text-4xl lg:text-6xl text-blue-500">
        my mantras
      </h2>
      <div className="grid lg:grid-cols-3 gap-x-16 gap-y-4 font-light text-xl lg:text-2xl geom">
        <div className="flex flex-col space-y-4 items-start">
          <MantraTitle>do not reinvent the wheel</MantraTitle>
          <div className="text-neutral-100">
            Embrace existing libraries and approaches &#8212; utilizing
            available resources is as vital as innovation.
          </div>
        </div>
        
        <div className="flex flex-col space-y-4 items-start justify">
        <MantraTitle>mvp first</MantraTitle>
          <div className="text-neutral-100">
            Begin with simplicity &#8212; add bells and whistles only when
            necessary.
          </div>
        </div>
        <div className="flex flex-col space-y-4 items-start justify">
          <MantraTitle>full stack always</MantraTitle>
          <div className="text-neutral-100">
            Be BOTH the jack and master of all trades.
          </div>
        </div>
      </div>
    </MainGridItem>
  );
};

export default Mantra;
