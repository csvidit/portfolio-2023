import MainContent from "@/components/MainContent";
import SimplePageTitle from "@/components/SimplePageTitle";
import Terms from "@/components/Terms/Terms";
import Script from "next/script";

const TermsPage = () => {
  return (
    <MainContent>
      <SimplePageTitle color="text-indigo-500">terms</SimplePageTitle>
      <Terms />
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-N2YVZ9CL5X" />
      <Script id="google-analytics">
        {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-N2YVZ9CL5X');
  `}
      </Script>
    </MainContent>
  );
};

export default TermsPage;
