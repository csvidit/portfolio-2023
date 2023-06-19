const Emphasis = (props: { children: React.ReactNode }) => {
  return (
    <em className={"inline bg-lime-500 text-lime-950 selection:bg-lime-950 selection:text-lime-400 not-italic px-1 rounded-lg"}>{props.children}</em>
  );
};

export default Emphasis;