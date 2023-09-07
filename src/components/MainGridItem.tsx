const MainGridItem = (props: {
  children: React.ReactNode;
  width: number;
  height: number;
  className?: string;
}) => {
  return (
    <div
      className={`col-span-1 lg:col-span-${props.width} lg:row-span-${props.height} flex flex-col space-y-8 justify-between rounded-[3rem] p-8 lg:p-12 bg-neutral-900 ${props.className}`}
    >
        {props.children}
    </div>
  );
};

export default MainGridItem;