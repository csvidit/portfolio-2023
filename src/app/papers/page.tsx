import Footer from "@/components/Footer/Footer";
import SimplePageTitle from "@/components/SimplePageTitle";
import PapersLoading from "@/components/Papers/PapersLoading";
import { GraphQLClient, gql } from "graphql-request";
import PaperItem from "@/components/Papers/PaperItem";
import PaperFilters from "@/components/Papers/PaperFilters";
import { throttledPapersFetch } from "@/throttle";
import { Paper, PapersData } from "@/hygraph.config";
import MainContent from "@/components/MainContent";
import Script from "next/script";

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_HIGH_PERFORMANCE_ENDPOINT!
);

const getData = async () => {
  const query = gql`
    query Papers {
      papers(orderBy: publishDate_DESC, where: { toShow: true }) {
        abstract
        internalSlug
        publishDate
        tag
        title
        document {
          fileName
          url
        }
        id
      }
    }
  `;
  
  const response: PapersData = await throttledPapersFetch(query);

  if (!response) {
    throw new Error("Failed to fetch data");
  }

  return response;
};

const Papers = async () => {
  const data: PapersData = await getData();

  return (
    <MainContent>
      <SimplePageTitle color="text-red-500">
        select academic papers
      </SimplePageTitle>
      <PaperFilters
        activeFilter={0}
      />
      {data ? (
        <>
          {data.papers.map((x: Paper) => (
            <PaperItem
              key={x.id}
              title={x.title}
              href={x.document.url}
              tag={x.tag}
              date={x.publishDate}
            >
              {x.abstract}
            </PaperItem>
          ))}
        </>
      ) : (
        <PapersLoading />
      )}
      <Footer />
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

export default Papers;
