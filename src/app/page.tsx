import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import Intro from "@/components/Index/Intro";
import Spotlight from "@/components/Index/Spotlight";
import IndexContent from "@/components/IndexContent";
import MainContainer from "@/components/MainContainer";
import MarqueeButton from "@/components/MarqueeButton";
import ComingUp from "@/components/Index/ComingUp";
import ContactForm2 from "@/components/ContactForm/ContactForm2";

const Index = () => {
  return (
    <MainContainer className="index_bg">
      <Nav />
      <IndexContent>
        <Intro/>
        <Spotlight />
        <ComingUp />
        <MarqueeButton
          label="projects"
          href="/projects"
          size={4}
          variant="nonfocus"
          color="violet"
          external={false}
        >
          projects across platforms and stacks
        </MarqueeButton>
        <ContactForm2 />
        <MarqueeButton
          label="github"
          href="https://github.com/csvidit"
          size={2}
          variant="nonfocus"
          color="blue"
          external={true}
        >
          github profile and repositories
        </MarqueeButton>
        <MarqueeButton
          label="linkedin"
          href="https://linkedin.com/in/viditkhandelwal"
          size={2}
          variant="nonfocus"
          color="blue"
          external={true}
        >
          view my professional profile
        </MarqueeButton>
        <Footer />
      </IndexContent>
    </MainContainer>
  );
};

export default Index;
