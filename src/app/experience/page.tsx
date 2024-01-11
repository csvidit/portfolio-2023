import HubbardExp from "@/components/Experience/HubbardExp";
import ISExp from "@/components/Experience/ISExp";
import ITAPExp from "@/components/Experience/ITAPExp";
import PixusExp from "@/components/Experience/PixusExp";
import WebExp from "@/components/Experience/WebExp";
import Footer from "@/components/Footer/Footer";
import SimplePageTitle from "@/components/SimplePageTitle";
import MarqueeButton from "@/components/MarqueeButton";
import CurrentExp from "@/components/Experience/CurrentExp";
import MainContent from "@/components/MainContent";
import { hygraphResumeLink } from "@/constants";
import { PiLinkedinLogoDuotone } from "react-icons/pi";
import Script from "next/script";

const Projects = () => {
  return (
    <MainContent>
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
      >
        read.cv profile and posts
      </MarqueeButton>
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
        label="engineering blog"
        href="/blog"
        size={3}
        variant="nonfocus"
        color="blue"
      >
        check out my engineering blog
      </MarqueeButton>
      <MarqueeButton
        label={<PiLinkedinLogoDuotone/>}
        href="/blog"
        size={1}
        variant="nonfocus"
        color="blue"
      >
        view my linkedin profile
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

export default Projects;
