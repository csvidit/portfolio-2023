"use client";

import IndexContent from "@/components/IndexContent";
import MainContainer from "@/components/MainContainer";
import Nav from "@/components/Nav/Nav";
import SimplePageTitle from "@/components/SimplePageTitle";

const Papers = () => {
  return (
    <MainContainer>
      <Nav />
      <IndexContent>
        <SimplePageTitle color="text-red-500">coming soon</SimplePageTitle>
      </IndexContent>
    </MainContainer>
  );
};

export default Papers;