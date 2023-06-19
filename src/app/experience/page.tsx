"use client";

import ReadCV from "@/components/About/ReadCV";
import HubbardExp from "@/components/Experience/HubbardExp";
import ISExp from "@/components/Experience/ISExp";
import ITAPExp from "@/components/Experience/ITAPExp";
import PixusExp from "@/components/Experience/PixusExp";
import Resume from "@/components/Experience/Resume";
import WebExp from "@/components/Experience/WebExp";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import IndexContent from "@/components/IndexContent";
import MainContainer from "@/components/MainContainer";
import ExperienceHeader from "@/components/Experience/ExperienceHeader";

const Projects = () => {
 
  return (
    <MainContainer>
      <Nav/>
      <IndexContent>
        <ExperienceHeader/>
        <PixusExp/>
        <HubbardExp/>
        <ISExp/>
        <WebExp/>
        <ITAPExp/>
        <ReadCV/>
        <Resume/>
        <Footer/>
      </IndexContent>
    </MainContainer>
  );
};

export default Projects;
