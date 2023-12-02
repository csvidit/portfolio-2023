import DePauw from "@/components/Academics/DePauw";
import Oxford from "@/components/Academics/Oxford";
import Footer from "@/components/Footer/Footer";
import MainContent from "@/components/MainContent";
import MarqueeButton from "@/components/MarqueeButton";
import SimplePageTitle from "@/components/SimplePageTitle";
import { hygraphResumeLink } from "@/constants";

const Academics = () => {
  return (
    <MainContent>
      <SimplePageTitle color="text-red-500">
        academic credentials
      </SimplePageTitle>
      <DePauw />
      <Oxford />
      <MarqueeButton
        label="papers"
        href="/papers"
        size={4}
        variant="nonfocus"
        color="red"
        external={false}
      >
        academic and research papers in economics and ethics
      </MarqueeButton>
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
        href={hygraphResumeLink}
        size={2}
        variant="focus"
        color="blue"
        external={true}
      >
        resume, up to date and ATS optimized
      </MarqueeButton>
      <Footer />
    </MainContent>
  );
};

export default Academics;
