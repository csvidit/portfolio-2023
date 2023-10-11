import Link from "next/link";


const PaperFilterItem = (props: {
  key: string
  isActive: boolean
  href: string;
  tag: number;
  children: React.ReactNode;
}) => {
  return (
    <Link
    key={props.key}
    href={props.href}
      className={`w-fit px-2 py-1 bg-neutral-950 hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-500 text-neutral-500 hover:text-neutral-300 transition-all duration-200 ease-in-out rounded-md uppercase text-base ${props.isActive ? "text-red-500 border-red-500 hover:text-red-500 hover:border-red-400" : ""}`}
    >
      {props.children}
    </Link>
  );
};

export default PaperFilterItem;
