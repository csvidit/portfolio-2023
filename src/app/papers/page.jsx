"use client";

import Footer from "@/components/Footer/Footer";
import IndexContent from "@/components/IndexContent";
import SimplePageTitle from "@/components/SimplePageTitle";
import MainGridItem from "@/components/MainGridItem";
import ActionButton from "@/components/Index/ActionButton";
import SecondaryButton from "@/components/SecondaryButton";
import { useState, useEffect } from "react";
import PaperFilters from "@/components/Papers/PaperFilters";
import PapersLoading from "@/components/Papers/PapersLoading";
import { GraphQLClient, gql } from "graphql-request";
import PaperItem from "@/components/Papers/PaperItem";

const Papers = () => {
  const [data, setData] = useState();
  const [activeFilter, setActiveFilter] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const client = new GraphQLClient(
        process.env.NEXT_PUBLIC_HYGRAPH_HIGH_PERFORMANCE_ENDPOINT
      );

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
      <SimplePageTitle color="text-red-500">
        select academic papers
      </SimplePageTitle>
      {/* <PaperFilters
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      /> */}
      {data ? (
        <>
          {data.papers.map((x, index) => (
            <PaperItem
              key={index}
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
