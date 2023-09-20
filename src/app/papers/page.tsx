import Footer from "@/components/Footer/Footer";
import IndexContent from "@/components/IndexContent";
import SimplePageTitle from "@/components/SimplePageTitle";
import PapersLoading from "@/components/Papers/PapersLoading";
import { GraphQLClient, gql } from "graphql-request";
import PaperItem from "@/components/Papers/PaperItem";

export type Paper = {
  abstract: string,
  internalSlug: string,
  publishDate: string,
  tag: number,
  title: string,
  document: {
    fileName: string,
    url: string
  }
  id: string
}

type PapersData = {
  papers: Paper[];
};

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_HIGH_PERFORMANCE_ENDPOINT!
);

const getData = async () => {
  const query = gql`
    query Papers {
      papers(orderBy: publishedAt_DESC, where: { toShow: true }) {
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
  const response: PapersData = await client.request(query);

  if (!response) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response;
};

const Papers = async () => {
  const data: PapersData = await getData();

  return (
    <IndexContent>
      <SimplePageTitle color="text-indigo-500">
        select academic papers
      </SimplePageTitle>
      {/* <PaperFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      /> */}
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
    </IndexContent>
  );
};

export default Papers;
