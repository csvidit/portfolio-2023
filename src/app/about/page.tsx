import AboutTitle from "@/components/About/AboutTitle";
import Education from "@/components/About/Education";
import Location from "@/components/About/Location";
import MusicPlayer from "@/components/About/MusicPlayer";
import Personality from "@/components/About/Personality";
import TechStack from "@/components/About/TechStack";
import Footer from "@/components/Footer/Footer";
import MarqueeButton from "@/components/MarqueeButton";
import PortraitCarousel from "@/components/About/PortraitCarousel";
import { PiGithubLogoDuotone, PiLinkedinLogoDuotone } from "react-icons/pi";
import Mantra from "@/components/About/Mantra";
import ContactForm from "@/components/ContactForm/ContactForm";
import MainContent from "@/components/MainContent";
import { hygraphResumeLink } from "@/constants";

const About = () => {
  return (
    <MainContent>
      <AboutTitle />
      {/* <Portrait /> */}
      <PortraitCarousel />
      <Education />
      <MarqueeButton
        label="experience"
        href="/experience"
        size={2}
        variant="nonfocus"
        color="blue"
        external={false}
      >
        detailed list of my prior work experience and duties
      </MarqueeButton>
      <Location />
      <Mantra />
      <MusicPlayer />
      <TechStack />
      <Personality />
      <ContactForm />
      <MarqueeButton
        label="resume"
        href={hygraphResumeLink}
        size={2}
        variant="focus"
        color="blue"
        external={true}
      >
        resume, up to date and ATS optimized
      </MarqueeButton>
      <MarqueeButton
        label={<PiGithubLogoDuotone />}
        alt="Link to Vidit Khandelwal's GitHub profile"
        href="https://github.com/csvidit"
        size={1}
        variant="nonfocus"
        color="blue"
        external={true}
      >
        github profile and repositories
      </MarqueeButton>
      <MarqueeButton
        label={<PiLinkedinLogoDuotone />}
        alt="Link to Vidit Khandelwal's LinkedIn profile"
        href="https://linkedin.com/in/viditkhandelwal"
        size={1}
        variant="nonfocus"
        color="blue"
        external={true}
      >
        view my professional profile
      </MarqueeButton>
      <Footer />
    </MainContent>
  );
};

export default About;
