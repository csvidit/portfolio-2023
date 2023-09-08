import { useState } from "react";

const CopyEmailButton = () => {
  const [emailCopyMessage, setEmailCopyMessage] = useState("Copy Email");

  return (
    <div className="flex flex-col space-y-2 w-fit">
      <button
        onClick={() => {
          navigator.clipboard.writeText("vidit@viditkhandelwal.com");
          setEmailCopyMessage("Email copied!");
        }}
        className="relative group w-fit flex flex-col items-center duration-300 ease-in-out transition-all h-[1.25rem] overflow-hidden"
      >
        <div className="flex opacity-100 -translate-y-0 group-hover:-translate-y-[110%] group-hover:opacity-0 duration-300 ease-in-out">
          You can also email me.
        </div>
        <div className="flex opacity-0 -translate-y-0 group-hover:translate-y-[-110%] group-hover:opacity-100 duration-300 ease-in-out">
          {emailCopyMessage}
        </div>
      </button>
      <div className="w-full border-t border-t-neutral-100"></div>
    </div>
  );
};

export default CopyEmailButton;