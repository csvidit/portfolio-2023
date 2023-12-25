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
      <Footer />
    </MainContent>
  );
};

export default Projects;
