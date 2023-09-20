import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import Intro from "@/components/Index/Intro";
import OTW from "@/components/Index/OTW";
import Spotlight from "@/components/Index/Spotlight";
import IndexContent from "@/components/IndexContent";
import MainContainer from "@/components/MainContainer";
import MarqueeButton from "@/components/MarqueeButton";
import ComingUp from "@/components/Index/ComingUp";

const Index = () => {
  return (
    <MainContainer className="index_bg">
      <Nav />
      <IndexContent>
        <Intro />
        <Spotlight />
        <ComingUp />
        <OTW />
        <MarqueeButton
          href="/projects"
          size={4}
          variant="nonfocus"
          color="indigo"
          external={false}
        >
          projects
        </MarqueeButton>
        <ContactForm />
        <MarqueeButton
          href="https://github.com/csvidit"
          size={2}
          variant="nonfocus"
          color="indigo"
          external={true}
        >
          github
        </MarqueeButton>
        <MarqueeButton
          href="https://linkedin.com/in/viditkhandelwal"
          size={2}
          variant="nonfocus"
          color="indigo"
          external={true}
        >
          linkedin
        </MarqueeButton>
        {/* <GitHub />
        <LinkedIn /> */}
        <Footer />
      </IndexContent>
    </MainContainer>
  );
};

export default Index;
