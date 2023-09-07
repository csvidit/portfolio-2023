"use client";

import Footer from "@/components/Footer/Footer";
import IndexContent from "@/components/IndexContent";
import SimplePageTitle from "@/components/SimplePageTitle";
import MainGridItem from "@/components/MainGridItem";
import ActionButton from "@/components/Index/ActionButton";
import SecondaryButton from "@/components/SecondaryButton";

const Papers = () => {

  return (
    <IndexContent>
      <SimplePageTitle color="text-red-500">
        select academic papers
      </SimplePageTitle>
      <MainGridItem width={4} height={1} className="mt-0">
        <div className="text-2xl lg:text-4xl">Work In Progress...</div>
        <div className="text-xl lg:text-2xl">A range of academic papers on economics, ethics, and philosophy.</div>
        <SecondaryButton external={false} variant="plain" size="fit" href="/projects">Check out my projects in the meantime</SecondaryButton>
      </MainGridItem>
      {/* <PapersFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      /> */}
      {/* <Suspense fallback={<PapersLoading />}> */}
      {/* {data.papers.map((x, index) => (
          <PaperItem
            key={index}
            title={x.title}
            href={`/view/${x.internalSlug}`}
            tag={x.tag}
          >
            {x.abstract}
          </PaperItem>
        ))} */}
      {/* </Suspense> */}
      <Footer />
    </IndexContent>
  );
};

export default Papers;
