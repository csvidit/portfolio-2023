import IndexContent from "@/components/IndexContent";
import SimplePageTitle from "@/components/SimplePageTitle";
import Terms from "@/components/Terms/Terms";

const TermsPage = () => {
  return (
    <IndexContent>
      <SimplePageTitle color="text-indigo-500">
        terms
      </SimplePageTitle>
      <Terms/>
    </IndexContent>
  );
};

export default TermsPage;
