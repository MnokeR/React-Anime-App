import { useQueryParams } from "../../../hooks/useQueryParams";
import { useInfiniteData } from "../../../hooks/useInfiniteData";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import { fetchSearchResults } from "../../../api/fetchSearchResults";
import { seasonOfYear } from "../../../utils/seasonOfYear";
import UpcomingList from "./UpcomingList";
import Title from "../../../components/Title";
import Loading from "../../../components/Loading";

function UpcomingData() {
  const { nextSeason, seasonYear } = seasonOfYear();
  const { getQueryParam } = useQueryParams();
  const season = getQueryParam("Season") || nextSeason;
  const year = getQueryParam("Year") || seasonYear;
  const format = getQueryParam("Format") || null;

  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteData(fetchSearchResults, {
    season,
    year,
    format,
    sort: ["POPULARITY_DESC"],
  });
  const ref = useInfiniteScroll(hasNextPage, fetchNextPage);

  if (status === "pending") return <Loading />;
  if (status === "error") return `Error: ${error.message}`;

  return (
    <div className="flex flex-col">
      <Title title={[season, year]} />
      <UpcomingList data={data} />
      {isFetchingNextPage && <Loading />}
      {hasNextPage && !isFetchingNextPage && <div ref={ref}></div>}
    </div>
  );
}

export default UpcomingData;
