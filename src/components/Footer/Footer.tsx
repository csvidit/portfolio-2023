import BackToTop from "./BackToTop";

const Footer = () => {
  return (
    <footer className="col-span-4 w-full h-full flex flex-col space-y-4 lg:flex-row lg:space-y-0 lg:justify-between lg:items-center rounded-[3rem] p-8 lg:p-12 bg-transparent text-neutral-300 font-light">
      <div className="flex flex-col space-y-2 items-baseline">
        <div className="p-2 rounded-md border bg-neutral-950 border-neutral-800 mattone w-fit select-none">
          VK
        </div>
        <div>
          &copy; {new Date().getFullYear()} Vidit Khandelwal. All rights reserved. All wrongs
          reserved, too.
        </div>
      </div>

      <BackToTop />
    </footer>
  );
};

export default Footer;
