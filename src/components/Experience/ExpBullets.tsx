const ExpBullets = (props: { children: React.ReactNode }) => {
  return (
    <ul className="flex flex-col space-y-1 text-base text-neutral-300 list-disc">
      {props.children}
    </ul>
  );
};

export default ExpBullets;
