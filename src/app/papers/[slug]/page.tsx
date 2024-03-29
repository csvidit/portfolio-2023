import Footer from "@/components/Footer/Footer";
import SimplePageTitle from "@/components/SimplePageTitle";
import PapersLoading from "@/components/Papers/PapersLoading";
import { GraphQLClient, RequestDocument, gql } from "graphql-request";
import PaperItem from "@/components/Papers/PaperItem";
import PaperFilters from "@/components/Papers/PaperFilters";
import { slugs } from "@/components/Papers/Filters";
import { Paper, PapersData } from "@/hygraph.config";
import { throttledPapersFetch } from "@/throttle";
import MainContent from "@/components/MainContent";
import Script from "next/script";

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_HIGH_PERFORMANCE_ENDPOINT!
);

const getData = async (tag: number) => {
  let query: RequestDocument;
  if (tag == 0) {
    query = gql`
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
  } else {
    query = gql`
    query Papers {
      papers(orderBy: publishDate_DESC, where: { tag: ${tag} }) {
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
  }
  const response: PapersData = await throttledPapersFetch(query);

  if (!response) {
    throw new Error("Failed to fetch data");
  }

  return response;
};

const PapersByTag = async ({ params }: { params: { slug: string } }) => {
  const activeFilter = params.slug;
  const tag = slugs.indexOf(activeFilter);
  const data: PapersData = await getData(tag);

  return (
    <MainContent>
      <SimplePageTitle color="text-red-500">
        select academic papers
      </SimplePageTitle>
      <PaperFilters activeFilter={tag} />
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

export async function generateStaticParams() {
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

  return response.papers.map((x: Paper) => ({
    slug: slugs[x.tag],
  }));
}


export default PapersByTag;
