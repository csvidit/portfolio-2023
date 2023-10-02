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
          href="https://media.graphassets.com/GBhBjvxQUGUQlQ1UJuIw"
          size={2}
          variant="focus"
          color="blue"
          external={true}
        >
          resume, up to date and ATS optimized
        </MarqueeButton>
        <Footer />
      </IndexContent>
    </MainContainer>
  );
};

export default Academics;
