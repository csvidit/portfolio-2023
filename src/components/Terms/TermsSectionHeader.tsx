const TermsSectionHeader = (props: { children: React.ReactNode }) => {
  return (
    <div
      className={`
  bg-indigo-950 text-indigo-500 px-4 py-2 rounded-[3rem] w-full bg-opacity-60`}
    >
      <p className="text-xl lg:text-2xl geom">{props.children}</p>
    </div>
  );
};

export default TermsSectionHeader;
