const SubSectionHeader = (props: {
  children: React.ReactNode;
  color: string; // for now, either red or blue
}) => {
  return (
    <div
      className={`${
        props.color == "blue"
          ? "bg-indigo-950 text-indigo-500"
          : "bg-indigo-950 text-indigo-500"
      } px-4 py-2 rounded-[3rem] w-full`}
    >
      <p className="text-xl lg:text-2xl geom">{props.children}</p>
    </div>
  );
};

export default SubSectionHeader;
