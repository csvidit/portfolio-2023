import SecondaryButton from "../SecondaryButton";
import BackToTop from "./BackToTop";

const Footer = () => {
  return (
    <div className="col-span-4 w-full h-full flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:justify-between lg:items-center rounded-[3rem] p-8 lg:p-12 bg-transparent text-neutral-300 font-light">
      <div>
        &copy; 2023 Vidit Khandelwal. All rights reserved. All wrongs reserved,
        too.
      </div>
      <BackToTop/>
    </div>
  );
};

export default Footer;
