const CurrentKeySkillItem = (props: {
    icon?: React.ReactNode;
    children: React.ReactNode;
  }) => {
    return (
      <div className="px-4 rounded-full bg-blue-100 flex flex-row space-x-2 items-center text-xs lg:text-sm">
        {props.icon && <span className="text-blue-500">{props.icon}</span>}
        <span className="text-blue-900">{props.children}</span>
      </div>
    );
  };
  
  export default CurrentKeySkillItem;