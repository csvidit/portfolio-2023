const MainContent = (props: { type: string; children: any }) => {
  if ((props.type == "center")) {
    return (
      <div className="mt-20 lg:mt-10 min-w-screen min-h-screen h-full flex flex-col space-y-5 lg:space-y-10 bg-transparent justify-center p-4 lg:p-20">
        {props.children}
      </div>
    );
  }
  return (
    <div className="mt-20 lg:mt-10 min-w-screen min-h-screen h-full flex flex-col space-y-5 lg:space-y-10 bg-transparent justify-start p-4 lg:p-20">
      {props.children}
    </div>
  );
};

export default MainContent;
