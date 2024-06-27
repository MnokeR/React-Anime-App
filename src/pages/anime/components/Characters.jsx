import { useParams } from "react-router-dom";
import { fetchCharacters } from "../../../api/fetchCharacters";
import RenderCharacters from "./RenderCharacters";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import Loading from "../../../components/Loading";
import { useInfiniteData } from "../../../hooks/useInfiniteData";

function Characters() {
  const params = useParams();
  const id = params.animeId;

  const {
    data,
    status,
    error,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteData(fetchCharacters, { id });

  const ref = useInfiniteScroll(hasNextPage, fetchNextPage);

  if (status === "pending") return "Loading";
  if (status === "error") return `Error: ${error.message}`;

  const handleClick = (e) => {
    e.preventDefault();
    fetchNextPage();
  };

  return (
    <div className="flex flex-col p-3 gap-2">
      <RenderCharacters data={data} role="MAIN" />
      <RenderCharacters data={data} role="SUPPORTING" />
      <RenderCharacters data={data} role="BACKGROUND" />
      {hasNextPage && (
        <button
          ref={ref}
          onClick={(e) => handleClick(e)}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage && <Loading />}
        </button>
      )}
    </div>
  );
}

export default Characters;
