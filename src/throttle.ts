import pThrottle from "p-throttle";
import { PapersData, PhotosData, WritingsData, hygraphClient } from "./hygraph.config";
import { RequestDocument } from "graphql-request";

const throttle = pThrottle({ limit: 5, interval: 1000 });

export const throttledPapersFetch = throttle(async (query: RequestDocument) => {
  const data: PapersData = await hygraphClient.request(query);
  return data;
})

export const throttledWritingsFetch = throttle(async (query: RequestDocument) => {
  const data: WritingsData = await hygraphClient.request(query);
  return data;
})

export const throttledPhotosFetch = throttle(async (query: RequestDocument) => {
  const data: PhotosData = await hygraphClient.request(query);
  return data;
})
