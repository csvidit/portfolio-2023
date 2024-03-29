import Footer from "@/components/Footer/Footer";
import PapersLoading from "@/components/Papers/PapersLoading";
import { gql } from "graphql-request";
import { Writing, WritingsData } from "@/hygraph.config";
import WritingItem from "@/components/WritingItem";
import { throttledWritingsFetch } from "@/throttle";
import BlogContent from "@/components/Blog/BlogContent";
import BlogIntro from "@/components/Blog/BlogIntro";
import Script from "next/script";

const getData = async () => {
  const query = gql`
    query Writings {
      writings(
        orderBy: publishDate_DESC
        where: { toShow: true, primaryTag: 2 }
      ) {
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
    <>
      <BlogIntro />
      <BlogContent>
        {data ? (
          <>
            {data.writings.map((x: Writing) => (
              <WritingItem
                type="blog"
                key={x.id}
                title={x.title}
                href={`/blog/${x.internalSlug}`}
                primaryTag={x.primaryTag}
                secondaryTag={x.secondaryTag}
                date={x.publishDate}
              >
                {x.description}
              </WritingItem>
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
      </BlogContent>
    </>
  );
};

export default LiteraturePage;
