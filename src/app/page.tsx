import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import GitHub from "@/components/Index/GitHub";
import Intro from "@/components/Index/Intro";
import LinkedIn from "@/components/Index/LinkedIn";
import OTW from "@/components/Index/OTW";
import Spotlight from "@/components/Index/Spotlight";
import IndexContent from "@/components/IndexContent";
import MainContainer from "@/components/MainContainer";
import MarqueeButton from "@/components/MarqueeButton";
import ComingUp from "@/components/Index/ComingUp";

const Index = () => {
  return (
    <MainContainer>
      <Nav />
      <IndexContent>
        <Intro />
        <Spotlight />
        <ComingUp/>
        <OTW />
        <MarqueeButton href="/projects" size={4} variant="nonfocus" color="violet" external={false}>projects</MarqueeButton>
        <ContactForm />
        <GitHub />
        <LinkedIn />
        <Footer />
      </IndexContent>
    </MainContainer>
  );
};

export default Index;
