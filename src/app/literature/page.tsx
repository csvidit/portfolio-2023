import Footer from "@/components/Footer/Footer";
import IndexContent from "@/components/IndexContent";
import LiteratureItem from "@/components/WritingItem";
import SimplePageTitle from "@/components/SimplePageTitle";
import PapersLoading from "@/components/Papers/PapersLoading";
import { gql } from "graphql-request";
import { hygraphClient } from "@/hygraph.config";

export type Writing = {
  description: string;
  internalSlug: string;
  primaryTag: number;
  secondaryTag: number;
  publishDate: string;
  title: string;
  text: {
    html: string;
  };
  id: string;
};

export type WritingsData = {
  writings: Writing[];
};

const getData = async () => {
  const query = gql`
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

  const response: WritingsData = await hygraphClient.request(query);

  if (!response) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response;
};

const LiteraturePage = async () => {
  const data: WritingsData = await getData();

  return (
    <IndexContent>
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
    </IndexContent>
  );
};

export default LiteraturePage;
