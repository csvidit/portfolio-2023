'use client'

import AboutTitle from "@/components/About/AboutTitle";
import ContactForm from "@/components/About/ContactForm";
import Education from "@/components/About/Education";
import Location from "@/components/About/Location";
import MusicPlayer from "@/components/About/MusicPlayer";
import Personality from "@/components/About/Personality";
import Portrait from "@/components/About/Portrait";
import ReadCV from "@/components/About/ReadCV";
import TechStack from "@/components/About/TechStack";
import Nav from "@/components/Nav/Nav";
import IndexContent from "@/components/IndexContent";
import MainContainer from "@/components/MainContainer";
import Footer from "@/components/Footer/Footer";
import Resume from "@/components/Experience/Resume";
import Layers from "@/components/About/Layers";
import SmallIconLink from "@/components/About/SmallIconLink";

const About = () => {
  return (
    <MainContainer>
      <Nav/>
      <IndexContent>
        <AboutTitle />
        <Portrait />
        <Education />
        <ReadCV />
        <Location/>
        <MusicPlayer />
        <TechStack/>
        <Personality/>
        <ContactForm />
        <Resume/>
        <SmallIconLink type="github" href="https://github.com/csvidit"/>
        <SmallIconLink type="linkedin" href="https://linkedin.com/in/viditkhandelwal"/>
        <Footer/>
      </IndexContent>
    </MainContainer>
  );
};

export default About;
