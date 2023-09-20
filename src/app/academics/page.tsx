import DePauw from "@/components/Academics/DePauw";
import Oxford from "@/components/Academics/Oxford";
import Footer from "@/components/Footer/Footer";
import IndexContent from "@/components/IndexContent";
import MainContainer from "@/components/MainContainer";
import MarqueeButton from "@/components/MarqueeButton";
import Nav from "@/components/Nav/Nav";
import SimplePageTitle from "@/components/SimplePageTitle";

const Academics = () => {
  return (
    <MainContainer>
      <Nav />
      <IndexContent>
        <SimplePageTitle color="text-indigo-500">academic credentials</SimplePageTitle>
        <DePauw />
        <Oxford />
        <MarqueeButton href="/papers" size={4} variant="nonfocus" color="indigo" external={false}>academic papers</MarqueeButton>
        <MarqueeButton href="https://read.cv/viditkhandelwal" size={2} variant="nonfocus" color="indigo" external={true}>read.cv</MarqueeButton>
        <MarqueeButton href="https://media.graphassets.com/GBhBjvxQUGUQlQ1UJuIw" size={2} variant="focus" color="indigo" external={true}>resume</MarqueeButton>
        <Footer />
      </IndexContent>
    </MainContainer>
  );
};

export default Academics;
