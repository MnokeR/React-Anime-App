import { useInfiniteQuery } from "@tanstack/react-query";

export const useInfiniteData = (fetchData, props) => {
  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["search", props],
    queryFn: ({ pageParam = 1 }) => fetchData(pageParam, props),
    getNextPageParam: (lastPage) => {
      const pageInfo = lastPage?.pageInfo;
      return pageInfo.hasNextPage ? pageInfo.currentPage + 1 : undefined;
    },
    staleTime: 60 * 1000 * 60,
  });

  return {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};
