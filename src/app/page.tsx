import ContactForm from "@/components/About/ContactForm";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import GitHub from "@/components/Index/GitHub";
import Intro from "@/components/Index/Intro";
import LinkedIn from "@/components/Index/LinkedIn";
import OTW from "@/components/Index/OTW";
import ProjectsButton from "@/components/Index/ProjectsButton";
import Spotlight from "@/components/Index/Spotlight";
import IndexContent from "@/components/IndexContent";
import MainContainer from "@/components/MainContainer";
import MarqueeButton from "@/components/MarqueeButton";

const Index = () => {
  return (
    <MainContainer>
      <Nav />
      <IndexContent>
        <Intro />
        <Spotlight />
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
