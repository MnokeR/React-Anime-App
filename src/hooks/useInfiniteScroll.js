import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useInfiniteScroll = (hasNextPage, fetchNextPage) => {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage]);

  return ref;
};
