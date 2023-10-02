const ExpBullets = (props: { children: React.ReactNode }) => {
  return (
    <ol className="flex flex-col space-y-1 text-base text-neutral-500 list-disc">{props.children}</ol>
  );
};

export default ExpBullets;