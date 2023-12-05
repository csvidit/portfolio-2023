"use client";

import Footer from "@/components/Footer/Footer";
import ActionButton from "@/components/Index/ActionButton";
import IndexContent from "@/components/IndexContent";

const NotFound = () => {
  return (
    <IndexContent>
      <div
        className={`col-span-1 lg:col-span-4 lg:row-span-1 h-fit flex flex-col space-y-8 items-center rounded-[3rem] p-8 lg:p-12 bg-neutral-900`}
      >
        <div className="text-4xl lg:text-6xl text-indigo-500">Error 404</div>
        <div className="text-xl lg:text-2xl">
          You were trying to explore uncharted space.
        </div>
        <ActionButton size="fit" external={false} variant="plain" href="/">
          Go to homepage
        </ActionButton>
      </div>

      <Footer />
    </IndexContent>
  );
};

export default NotFound;
