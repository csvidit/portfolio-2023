const ProjectIconsContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-row space-x-4 items-center text-xl lg:text-2xl">
      {props.children}
    </div>
  );
};

export default ProjectIconsContainer;
