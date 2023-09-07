import { GraphQLClient, gql } from "graphql-request";
import IndexContent from "@/components/IndexContent";
import MainGridItem from "@/components/MainGridItem";
import { BsDot } from "react-icons/bs";
import PapersLoading from "@/components/Papers/PapersLoading";
import { Interweave, Markup } from "interweave";
import { polyfill } from "interweave-ssr";
import Footer from "@/components/Footer/Footer";
import MarqueeButton from "@/components/MarqueeButton";

polyfill();

const tags = ["All", "Poem", "Short Story"];

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_HIGH_PERFORMANCE_ENDPOINT
);

export default async function ViewLiterature({ params }) {
  const data = await getData(params.slug);

  const date = new Date(data.publishDate);
  let dateString = date.toDateString();
  dateString = dateString.substring(dateString.indexOf(" "));

  return (
    <IndexContent>
      {data ? (
        <>
          <MainGridItem
            width={4}
            height={1}
            className="justify-start h-fit text-lg lg:text-xl items-center"
          >
            <div className=" text-indigo-500 uppercase">
              {tags[data.primaryTag]}
            </div>
            <div className="text-2xl lg:text-4xl">{data.title}</div>
            <div className="flex flex-row space-x-2 flex-wrap items-center text-neutral-500">
              <div className="uppercase">{dateString}</div>
            </div>
          </MainGridItem>
          <MainGridItem width={4} height={1}>
            <Markup
              className={`flex flex-col space-y-4 ${
                data.primaryTag == 1 ? "items-center" : ""
              }`}
              content={data.text.html}
            />
          </MainGridItem>
        </>
      ) : (
        <PapersLoading />
      )}
      <MarqueeButton
        variant="nonfocus"
        color="indigo"
        external={false}
        href="/literature"
        size={4}
      >
        all literature
      </MarqueeButton>
      <Footer />
    </IndexContent>
  );
}

async function getData(slug) {
  const query = gql`query Writings {
        writings(orderBy: publishedAt_DESC, where: {toShow: true, internalSlug: "${slug}"}) {
          description
          internalSlug
          primaryTag
          publishDate
          title
          text {
            html
          }
        }
      }
      `;

  const response = await client.request(query);

  if (!response) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.writings[0];
}

export async function generateStaticParams() {
  const query = gql`
    query Writings {
      writings(orderBy: publishedAt_DESC, where: { toShow: true }) {
        description
        internalSlug
        primaryTag
        publishDate
        title
        text {
          html
        }
      }
    }
  `;

  const response = await client.request(query);

  return response.writings.map((x) => ({
    slug: x.internalSlug,
  }));
}
