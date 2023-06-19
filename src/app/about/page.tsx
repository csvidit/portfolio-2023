import AboutTitle from "@/components/About/AboutTitle";
import ContactForm from "@/components/About/ContactForm";
import Education from "@/components/About/Education";
import Location from "@/components/About/Location";
import MusicPlayer from "@/components/About/MusicPlayer";
import Personality from "@/components/About/Personality";
import Portrait from "@/components/About/Portrait";
import ReadCV from "@/components/About/ReadCV";
import TechStack from "@/components/About/TechStack";
import Nav from "@/components/Nav/Nav";
import IndexContent from "@/components/IndexContent";
import MainContainer from "@/components/MainContainer";
import Footer from "@/components/Footer/Footer";

const About = () => {
  return (
    <MainContainer>
      <Nav/>
      <IndexContent>
        <AboutTitle />
        <Portrait />
        <Education />
        <ReadCV />
        <Location/>
        <MusicPlayer />
        <TechStack/>
        <Personality/>
        <ContactForm />
        <Footer/>
      </IndexContent>
    </MainContainer>
  );
};

export default About;
