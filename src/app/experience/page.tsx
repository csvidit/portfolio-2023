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
import CurrentExp from "@/components/Experience/CurrentExp";

const Projects = () => {
  return (
    <MainContainer>
      <Nav />
      <IndexContent>
        <SimplePageTitle color="text-blue-500">work experience</SimplePageTitle>
        <CurrentExp />
        {/* <CurrentExp/> */}
        <PixusExp />
        <HubbardExp />
        <ISExp />
        <WebExp />
        <ITAPExp />
        <MarqueeButton
          label="read.cv"
          href="https://read.cv/viditkhandelwal"
          size={2}
          variant="nonfocus"
          color="blue"
          external={true}
        >
          read.cv profile and posts
        </MarqueeButton>
        <MarqueeButton
          label="resume"
          href="https://media.graphassets.com/GBhBjvxQUGUQlQ1UJuIw"
          size={2}
          variant="focus"
          color="blue"
          external={true}
        >
          resume, up to date and ATS optimized
        </MarqueeButton>
        <Footer />
      </IndexContent>
    </MainContainer>
  );
};

export default Projects;
