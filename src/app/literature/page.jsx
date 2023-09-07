"use client";

import Footer from "@/components/Footer/Footer";
import IndexContent from "@/components/IndexContent";
import LiteratureItem from "@/components/Literature/LiteratureItem";
import SimplePageTitle from "@/components/SimplePageTitle";
import PapersLoading from "@/components/Papers/PapersLoading";
import { GraphQLClient, gql } from "graphql-request";
import { useState, useEffect } from "react";
import MarqueeButton from "@/components/MarqueeButton";

const LiteraturePage = () => {
  const [data, setData] = useState();
  const [activeFilter, setActiveFilter] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const client = new GraphQLClient(
        process.env.NEXT_PUBLIC_HYGRAPH_HIGH_PERFORMANCE_ENDPOINT
      );

      const query = gql`
        query Writings {
          writings(orderBy: publishDate_DESC, where: { toShow: true }) {
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
      setData(response);
      console.log(response);
    };

    getData();
  }, []);

  return (
    <IndexContent>
      <SimplePageTitle color="text-indigo-500">
        select works of literature
      </SimplePageTitle>
      {data ? (
        <>
          {data.writings.map((x, index) => (
            <LiteratureItem
              key={index}
              title={x.title}
              href={`/literature/${x.internalSlug}`}
              tag={x.primaryTag}
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
