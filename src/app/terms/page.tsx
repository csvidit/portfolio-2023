import MainContent from "@/components/MainContent";
import SimplePageTitle from "@/components/SimplePageTitle";
import Terms from "@/components/Terms/Terms";

const TermsPage = () => {
  return (
    <MainContent>
      <SimplePageTitle color="text-indigo-500">
        terms
      </SimplePageTitle>
      <Terms/>
    </MainContent>
  );
};

export default TermsPage;
