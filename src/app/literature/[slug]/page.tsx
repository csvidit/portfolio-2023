import { GraphQLClient, RequestDocument, gql } from "graphql-request";
import MainGridItem from "@/components/MainGridItem";
import PapersLoading from "@/components/Papers/PapersLoading";
import { Markup } from "interweave";
import { polyfill } from "interweave-ssr";
import Footer from "@/components/Footer/Footer";
import MarqueeButton from "@/components/MarqueeButton";
import { throttledWritingsFetch } from "@/throttle";
import { WritingsData, Writing } from "@/hygraph.config";
import MainContent from "@/components/MainContent";
import Script from "next/script";

polyfill();

const secondaryTags = ["All", "Poem", "Short Story"];

const client = new GraphQLClient(
  process.env.NEXT_PUBLIC_HYGRAPH_HIGH_PERFORMANCE_ENDPOINT!
);

export default async function ViewLiterature({ params }: any) {
  const data = await getData(params.slug);

  const date = new Date(data.publishDate);
  let dateString = date.toDateString();
  dateString = dateString.substring(dateString.indexOf(" "));

  return (
    <MainContent>
      {data ? (
        <>
          <MainGridItem
            width={4}
            height={1}
            className="justify-start h-fit text-lg lg:text-xl items-center"
          >
            <div className=" text-indigo-500 uppercase">
              {secondaryTags[data.primaryTag]}
            </div>
            <div className="text-2xl lg:text-4xl">{data.title}</div>
            <div className="flex flex-row space-x-2 flex-wrap items-center text-neutral-500">
              <div className="uppercase">{dateString}</div>
            </div>
          </MainGridItem>
          <MainGridItem width={4} height={1}>
            <Markup
              className={`flex flex-col space-y-4 ${
                data.secondaryTag == 1 ? "items-center" : ""
              }`}
              content={data.text.html}
            />
          </MainGridItem>
        </>
      ) : (
        <PapersLoading />
      )}
      <MarqueeButton
        label="all literature"
        variant="nonfocus"
        color="indigo"
        href="/literature"
        size={4}
      >
        go back to the literature page
      </MarqueeButton>
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
}

async function getData(slug: string) {
  const query = gql`query Writings {
        writings(orderBy: publishDate_DESC, where: {toShow: true, internalSlug: "${slug}"}) {
          description
          internalSlug
          primaryTag
          secondaryTag
          publishDate
          title
          text {
            html
          }
        }
      }
      `;

  const response: WritingsData = await throttledWritingsFetch(query);

  if (!response) {
    throw new Error("Failed to fetch data");
  }

  return response.writings[0];
}

export async function generateStaticParams() {
  const query: RequestDocument = gql`
    query Writings {
      writings(orderBy: publishDate_DESC, where: { toShow: true, primaryTag: 1 }) {
        description
        internalSlug
        primaryTag
        secondaryTag
        publishDate
        title
        text {
          html
        }
      }
    }
  `;

  const response: WritingsData = await throttledWritingsFetch(query);

  return response.writings.map((x: Writing) => ({
    slug: x.internalSlug,
  }));
}
