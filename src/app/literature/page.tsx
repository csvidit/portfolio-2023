import Footer from "@/components/Footer/Footer";
import LiteratureItem from "@/components/WritingItem";
import SimplePageTitle from "@/components/SimplePageTitle";
import PapersLoading from "@/components/Papers/PapersLoading";
import { RequestDocument, gql } from "graphql-request";
import { Writing, WritingsData } from "@/hygraph.config";
import { throttledWritingsFetch } from "@/throttle";
import MainContent from "@/components/MainContent";
import Script from "next/script";

const getData = async () => {
  const query: RequestDocument = gql`
    query Writings {
      writings(orderBy: publishDate_DESC, where: { primaryTag: 1 }) {
        description
        internalSlug
        primaryTag
        secondaryTag
        publishDate
        title
        text {
          html
        }
        id
      }
    }
  `;

  const response: WritingsData = await throttledWritingsFetch(query);

  if (!response) {
    throw new Error("Failed to fetch data");
  }

  return response;
};

const LiteraturePage = async () => {
  const data: WritingsData = await getData();

  return (
    <MainContent>
      <SimplePageTitle color="text-indigo-500">
        select works of literature
      </SimplePageTitle>
      {data ? (
        <>
          {data.writings.map((x: Writing) => (
            <LiteratureItem
              type="literature"
              key={x.id}
              title={x.title}
              href={`/literature/${x.internalSlug}`}
              primaryTag={x.primaryTag}
              secondaryTag={x.secondaryTag}
              date={x.publishDate}
            >
              {x.description}
            </LiteratureItem>
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

export default LiteraturePage;
