"use client";

import HubbardExp from "@/components/Experience/HubbardExp";
import ISExp from "@/components/Experience/ISExp";
import ITAPExp from "@/components/Experience/ITAPExp";
import PixusExp from "@/components/Experience/PixusExp";
import WebExp from "@/components/Experience/WebExp";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import IndexContent from "@/components/IndexContent";
import MainContainer from "@/components/MainContainer";
import SimplePageTitle from "@/components/SimplePageTitle";
import MarqueeButton from "@/components/MarqueeButton";

const Projects = () => {
  return (
    <MainContainer>
      <Nav />
      <IndexContent>
        <SimplePageTitle color="text-indigo-500">work experience</SimplePageTitle>
        <PixusExp />
        <HubbardExp />
        <ISExp />
        <WebExp />
        <ITAPExp />
        <MarqueeButton
          href="https://read.cv/viditkhandelwal"
          size={2}
          variant="nonfocus"
          color="indigo"
          external={true}
        >
          read.cv
        </MarqueeButton>
        <MarqueeButton
          href="https://media.graphassets.com/GBhBjvxQUGUQlQ1UJuIw"
          size={2}
          variant="focus"
          color="indigo"
          external={true}
        >
          resume
        </MarqueeButton>
        <Footer />
      </IndexContent>
    </MainContainer>
  );
};

export default Projects;
