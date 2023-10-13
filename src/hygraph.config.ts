import { GraphQLClient } from "graphql-request";

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

export type Paper = {
  abstract: string;
  internalSlug: string;
  publishDate: string;
  tag: number;
  title: string;
  document: {
    fileName: string;
    url: string;
  };
  id: string;
};

export type PapersData = {
  papers: Paper[];
};

export type Photo = {
  caption: string;
  date: string;
  id: string;
  priority: number,
  photo: {
    url: string;
    width: number;
    size: number;
    mimeType: string;
    height: number;
  };
  
};

export type PhotosData = {
  photos: Photo[];
};

export const hygraphClient = new GraphQLClient(
    process.env.NEXT_PUBLIC_HYGRAPH_HIGH_PERFORMANCE_ENDPOINT!
  );