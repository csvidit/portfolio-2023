import ContactForm from "@/components/About/ContactForm";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Nav/Nav";
import ActionButton from "@/components/Index/ActionButton";
import Contact from "@/components/Index/Contact";
import GitHub from "@/components/Index/GitHub";
import HelloMarquee from "@/components/Index/HelloMarquee";
import Intro from "@/components/Index/Intro";
import LinkedIn from "@/components/Index/LinkedIn";
import OTW from "@/components/Index/OTW";
import ProjectsButton from "@/components/Index/ProjectsButton";
import Spotlight from "@/components/Index/Spotlight";
import IndexContent from "@/components/IndexContent";
import MainContainer from "@/components/MainContainer";
import ScrollingTitles from "@/components/ScrollingTitles";

const Index = () => {
  return (
    <MainContainer>
      <Nav/>
      <IndexContent>
        <Intro />
        <Spotlight />
        <OTW />
        <ContactForm/>
        <GitHub/>
        <LinkedIn/>
        <ProjectsButton/>
        <Footer/>
      </IndexContent>
    </MainContainer>
  );
};

export default Index;
