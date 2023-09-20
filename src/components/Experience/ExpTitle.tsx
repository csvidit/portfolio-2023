const ExpTitle = (props: { children: React.ReactNode; variant?: string }) => {
  if (props.variant == "academic") {
    return (
      <h3 className="text-indigo-500 geom text-xl lg:text-2xl flex flex-row space-x-2 items-center">
        {props.children}
      </h3>
    );
  }
  return (
    <h3 className="text-indigo-500 geom text-xl lg:text-2xl flex flex-row space-x-2 items-center">{props.children}</h3>
  );
};

export default ExpTitle;
