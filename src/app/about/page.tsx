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
// import Resume from "@/components/Experience/Resume";
import Layers from "@/components/About/Layers";
import MarqueeButton from "@/components/MarqueeButton";
import { SiGithub, SiLinkedin } from "react-icons/si";

const About = () => {
  return (
    <MainContainer>
      <Nav/>
      <IndexContent>
        <AboutTitle />
        <Portrait />
        <Education />
        <MarqueeButton
          href="/experience"
          size={2}
          variant="nonfocus"
          color="blue"
          external={false}
        >
          experience
        </MarqueeButton>
        {/* <ExpButton/> */}
        <Location/>
        <MusicPlayer />
        <TechStack/>
        <Personality/>
        <ContactForm />
        <MarqueeButton
          href="https://www.icloud.com/iclouddrive/06fIUJofAuiq28fvMni89i64w#Vidit_Khandelwal_Resume_27-Jun-23"
          size={2}
          variant="focus"
          color="blue"
          external={true}
        >
          resume
        </MarqueeButton>
        <MarqueeButton
          href="https://github.com/csvidit"
          size={1}
          variant="nonfocus"
          color="blue"
          external={true}
        >
          <SiGithub/>
        </MarqueeButton>
        <MarqueeButton
          href="https://linkedin.com/in/viditkhandelwal"
          size={1}
          variant="nonfocus"
          color="blue"
          external={true}
        >
          <SiLinkedin/>
        </MarqueeButton>
        <Footer/>
      </IndexContent>
    </MainContainer>
  );
};

export default About;
