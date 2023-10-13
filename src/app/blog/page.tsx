import Footer from "@/components/Footer/Footer";
import IndexContent from "@/components/IndexContent";
import SimplePageTitle from "@/components/SimplePageTitle";
import PapersLoading from "@/components/Papers/PapersLoading";
import { gql } from "graphql-request";
import { Writing, WritingsData, hygraphClient } from "@/hygraph.config";
import MainGridItem from "@/components/MainGridItem";
import BackslashLogo from "@/components/Literature/BackslashLogo";
import { BsSlashSquare } from "react-icons/bs";
import WritingItem from "@/components/WritingItem";
import { throttledWritingsFetch } from "@/throttle";

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

  // const response: WritingsData = await hygraphClient.request(query);
  const response: WritingsData = await throttledWritingsFetch(query);

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
      <div
        className={`col-span-4 rounded-[3rem] p-8 lg:p-12 h-max flex flex-col space-y-4 bg-neutral-900 text-blue-500 text-4xl lg:text-6xl`}
      >
        <div className="bg-blue-950 bg-opacity-60 rounded-[3rem] w-fit px-4 py-2 text-base lg:text-2xl text-blue-500">
          COMING SOON
        </div>
        <div className="space-x-4">
          <span className="">the</span>
          <span>
            <span className="">
              backs
              <BackslashLogo />
              ash
            </span>
          </span>
          <span>blog</span>
        </div>
        <h2 className="text-base lg:text-2xl w-fit">
          Articles on web development, software engineering, and the tech
          industry.
        </h2>
      </div>
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
    </IndexContent>
  );
};

export default LiteraturePage;
