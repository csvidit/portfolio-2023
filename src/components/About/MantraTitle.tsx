const MantraTitle = (props: {children: React.ReactNode}) => {
  return (
    <div className="px-4 py-2 flex flex-rowitems-center w-full text-center rounded-full bg-blue-950 bg-opacity-60 text-blue-500">
      {props.children}
    </div>
  );
};

export default MantraTitle;