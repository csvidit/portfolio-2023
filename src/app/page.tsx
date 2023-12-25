import Footer from "@/components/Footer/Footer";
import Intro from "@/components/Index/Intro";
import Spotlight from "@/components/Index/Spotlight";
import MarqueeButton from "@/components/MarqueeButton";
import ComingUp from "@/components/Index/ComingUp";
import MainContent from "@/components/MainContent";
import ContactForm from "@/components/ContactForm/ContactForm";

const Index = () => {
  return (
    <MainContent>
      <Intro />
      <Spotlight />
      <ComingUp />
      <MarqueeButton
        label="projects"
        href="/projects"
        size={4}
        variant="nonfocus"
        color="violet"
      >
        projects across platforms and stacks
      </MarqueeButton>
      <ContactForm/>
      <MarqueeButton
        label="github"
        href="https://github.com/csvidit"
        size={2}
        variant="nonfocus"
        color="blue"
      >
        github profile and repositories
      </MarqueeButton>
      <MarqueeButton
        label="linkedin"
        href="https://linkedin.com/in/viditkhandelwal"
        size={2}
        variant="nonfocus"
        color="blue"
      >
        view my professional profile
      </MarqueeButton>
      <Footer />
    </MainContent>
  );
};

export default Index;
