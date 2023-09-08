import { GraphQLClient } from "graphql-request";

export const hygraphClient = new GraphQLClient(
    process.env.NEXT_PUBLIC_HYGRAPH_HIGH_PERFORMANCE_ENDPOINT!
  );