const ExpBullets = (props: { children: React.ReactNode, className?: string}) => {
  return (
    <ul className={`flex flex-col space-y-1 text-base text-neutral-300 list-disc ${props.className}`}>
      {props.children}
    </ul>
  );
};

export default ExpBullets;
