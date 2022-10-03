import {
  useInfiniteQuery,
  useQueryClient,
  InfiniteData,
} from "@tanstack/react-query";
import { request, gql } from "graphql-request";
import { useState } from "react";
import { PaginationData } from "../../types/paginationData";
import { Post } from "../../types/post";

const endpoint = "https://gorest.co.in/public/v2/graphql";

export function usePosts() {
  var paginatedQuery = useInfiniteQuery<PaginationData<Post>>(
    ["posts"],
    async ({ pageParam }) => {
      const res = await request(
        endpoint,
        gql`
          query {
            posts(first: 5${pageParam ? `, after: "${pageParam}"` : ""}) {
              pageInfo {
                endCursor
                startCursor
                hasNextPage
                hasPreviousPage
              }
              totalCount
              nodes {
                id
                user {
                  id
                  name
                  email
                  gender
                }
                title
                body
              }
            }
          }
        `
      );
      return res.posts;
    },
    {
      getNextPageParam: (lastPage) =>
        lastPage?.pageInfo.hasNextPage
          ? lastPage.pageInfo.endCursor
          : undefined,
      keepPreviousData: true,
      retry: (failureCount, error) => failureCount < 3,
    }
  );
  const client = useQueryClient();
  const [refereshing, setRefereshing] = useState(false);

  const refresh = async () => {
    setRefereshing(true);
    var data = await paginatedQuery.refetch({
      refetchPage: (page, index) => index === 0,
    });
    if (!data.isError) {
      client.setQueryData<InfiniteData<PaginationData<Post>>>(
        ["posts"],
        (input) => {
          return {
            pageParams: [],
            pages: input.pages.length > 0 ? [input.pages[0]] : [],
          };
        }
      );
    }
    setRefereshing(false);
  };
  return { ...paginatedQuery, refresh, refereshing };
}
