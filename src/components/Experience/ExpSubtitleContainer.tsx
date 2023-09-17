const ExpSubtitleContainer = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-2 items-baseline">
      {props.children}
    </div>
  );
};

export default ExpSubtitleContainer;
