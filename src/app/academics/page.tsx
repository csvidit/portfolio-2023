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
        <SimplePageTitle color="text-red-500">academic credentials</SimplePageTitle>
        <DePauw />
        <Oxford />
        <MarqueeButton href="/papers" size={4} variant="nonfocus" color="red" external={false}>academic papers</MarqueeButton>
        <MarqueeButton href="https://read.cv/viditkhandelwal" size={2} variant="nonfocus" color="blue" external={true}>read.cv</MarqueeButton>
        <MarqueeButton href="https://www.icloud.com/iclouddrive/0ddTT7psEd47xFmdE9FOg9rIw#Vidit_Khandelwal_Resume_12-Jul-23_Revised" size={2} variant="focus" color="blue" external={true}>resume</MarqueeButton>
        <Footer />
      </IndexContent>
    </MainContainer>
  );
};

export default Academics;
