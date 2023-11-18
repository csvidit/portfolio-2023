import InfoSticker from "./InfoSticker";

const BlogIntro = () => {
  return (
    <div
      className={`blog_title top-0 left-0 w-full col-span-4 rounded-b-[3rem] p-8 lg:p-12 h-max flex flex-col space-y-4 text-neutral-100 text-4xl lg:text-6xl`}
    >
      <div className="flex flex-col space-y-4 px-2 lg:px-20">
        <InfoSticker/>

        <div className="space-x-4 extended italic uppercase">
          <span className="">the</span>
          {/* <span>
        <span className="">
          backs
          <BackslashLogo />
          ash
        </span>
      </span> */}
          <span>blog</span>
        </div>
        <h2 className="text-base lg:text-2xl w-fit">
          Articles on tech and business.
        </h2>
      </div>
    </div>
  );
};

export default BlogIntro;
