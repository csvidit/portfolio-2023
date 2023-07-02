const SubSectionHeader = (props: {children: React.ReactNode}) => {
  return (
    <div className="bg-red-950 text-red-500 px-4 py-2 rounded-[3rem] w-full">
      <p className="text-xl lg:text-2xl geom text-red-500">{props.children}</p>
    </div>
  );
};

export default SubSectionHeader;
