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
import { RiTwitterXLine } from "react-icons/ri";
import Script from "next/script";

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
      >
        detailed list of my prior work experience and duties
      </MarqueeButton>
      <Location />
      <Mantra />
      <MusicPlayer />
      <TechStack />
      <Personality />
      <MarqueeButton
        label="engineering blog"
        href="/blog"
        size={3}
        variant="nonfocus"
        color="blue"
      >
        engineering blog
      </MarqueeButton>
      <MarqueeButton
        label={<RiTwitterXLine />}
        href="https://twitter.com/csvidit"
        size={1}
        variant="nonfocus"
        color="blue"
      >
        x/twitter profile
      </MarqueeButton>
      <ContactForm />
      <MarqueeButton
        label="resume"
        href={hygraphResumeLink}
        size={2}
        variant="focus"
        color="blue"
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
      >
        view my professional profile
      </MarqueeButton>
      <Footer />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-N2YVZ9CL5X" />
      <Script id="google-analytics">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N2YVZ9CL5X');
  `}
      </Script>
    </MainContent>
  );
};

export default About;
