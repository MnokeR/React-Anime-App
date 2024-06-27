import SearchResultList from "./SearchResultList";
import Loading from "../../../components/Loading";
import { useQueryParams } from "../../../hooks/useQueryParams";
import { useInfiniteData } from "../../../hooks/useInfiniteData";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import { fetchSearchResults } from "../../../api/fetchSearchResults";

function SearchResults() {
  const { getQueryParam } = useQueryParams();

  const term = getQueryParam("term") || undefined;
  const season = getQueryParam("Season")?.toUpperCase() || undefined;
  const year = getQueryParam("Year") || undefined;
  const format = getQueryParam("Format")?.toUpperCase() || undefined;

  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteData(fetchSearchResults, {
    term,
    season,
    year,
    format,
  });

  const ref = useInfiniteScroll(hasNextPage, fetchNextPage);

  if (status === "pending") return <Loading />;
  if (status === "error") return `Error: ${error.message}`;

  return (
    <>
      <SearchResultList data={data} term={term} />
      {isFetchingNextPage && <Loading />}
      {hasNextPage && !isFetchingNextPage && <div ref={ref}></div>}
    </>
  );
}

export default SearchResults;
