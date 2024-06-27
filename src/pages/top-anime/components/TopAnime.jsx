import { useQueryParams } from "../../../hooks/useQueryParams";
import { useInfiniteData } from "../../../hooks/useInfiniteData";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import { fetchSearchResults } from "../../../api/fetchSearchResults";
import TopAnimeList from "./TopAnimeList";
import Loading from "../../../components/Loading";
import Title from "../../../components/Title";

function TopAnime() {
  const { getQueryParam } = useQueryParams();
  const format = getQueryParam("Format")?.toUpperCase() || undefined;
  const {
    data,
    error,
    status,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteData(fetchSearchResults, {
    sort: "SCORE_DESC",
    format,
  });

  const ref = useInfiniteScroll(hasNextPage, fetchNextPage);

  if (status === "pending") return <Loading />;
  if (status === "error") return `Error: ${error.message}`;

  return (
    <>
      <Title title={["TOP", "RATED"]} />
      <TopAnimeList data={data} />
      {isFetchingNextPage && <Loading />}
      {hasNextPage && !isFetchingNextPage && <div ref={ref}></div>}
    </>
  );
}

export default TopAnime;
