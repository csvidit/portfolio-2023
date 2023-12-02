const KeySkillItem = (props: {
  icon?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="px-2 rounded-full bg-blue-950 flex flex-row space-x-2 items-center text-xs lg:text-sm">
      {props.icon && <span className="text-blue-500">{props.icon}</span>}
      <span className="text-blue-100">{props.children}</span>
    </div>
  );
};

export default KeySkillItem;