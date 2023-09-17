"use client";

const EducationItem = (props: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col space-y-1 font-light flex-wrap ">
      {props.children}
    </div>
  );
};

export default EducationItem;
