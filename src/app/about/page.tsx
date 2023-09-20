"use client";

import AboutTitle from "@/components/About/AboutTitle";
import ContactForm from "@/components/ContactForm";
import Education from "@/components/About/Education";
import Location from "@/components/About/Location";
import MusicPlayer from "@/components/About/MusicPlayer";
import Personality from "@/components/About/Personality";
import TechStack from "@/components/About/TechStack";
import Nav from "@/components/Nav/Nav";
import IndexContent from "@/components/IndexContent";
import MainContainer from "@/components/MainContainer";
import Footer from "@/components/Footer/Footer";
import MarqueeButton from "@/components/MarqueeButton";
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
          color="indigo"
          external={false}
        >
          experience
        </MarqueeButton>
        <Location />
        <Mantra />
        <MusicPlayer />
        <TechStack />
        <Personality />
        <ContactForm />
        <MarqueeButton
          href="https://media.graphassets.com/GBhBjvxQUGUQlQ1UJuIw"
          size={2}
          variant="focus"
          color="indigo"
          external={true}
        >
          resume
        </MarqueeButton>
        <MarqueeButton
          alt="Link to Vidit Khandelwal's GitHub profile"
          href="https://github.com/csvidit"
          size={1}
          variant="nonfocus"
          color="indigo"
          external={true}
        >
          <PiGithubLogoDuotone />
        </MarqueeButton>
        <MarqueeButton
          alt="Link to Vidit Khandelwal's LinkedIn profile"
          href="https://linkedin.com/in/viditkhandelwal"
          size={1}
          variant="nonfocus"
          color="indigo"
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
