"use client";

import AboutTitle from "@/components/About/AboutTitle";
import ContactForm from "@/components/ContactForm";
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
import MarqueeButton from "@/components/MarqueeButton";
import { SiGithub, SiLinkedin } from "react-icons/si";
import PortraitCarousel from "@/components/About/PortraitCarousel";
import { PiGithubLogoDuotone, PiLinkedinLogoDuotone } from "react-icons/pi";
import Mantra from "@/components/About/Mantra";

const About = () => {
  return (
    <MainContainer>
      <Nav />
      <IndexContent>
        <AboutTitle />
        {/* <Portrait /> */}
        <PortraitCarousel />
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
        <Location />
        <Mantra/>
        <MusicPlayer />
        <TechStack />
        <Personality />
        <ContactForm />
        <MarqueeButton
          href="https://www.icloud.com/iclouddrive/0ddTT7psEd47xFmdE9FOg9rIw#Vidit_Khandelwal_Resume_12-Jul-23_Revised"
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
          <PiGithubLogoDuotone />
        </MarqueeButton>
        <MarqueeButton
          href="https://linkedin.com/in/viditkhandelwal"
          size={1}
          variant="nonfocus"
          color="blue"
          external={true}
        >
          <PiLinkedinLogoDuotone />
        </MarqueeButton>
        <Footer />
      </IndexContent>
    </MainContainer>
  );
};

export default About;
