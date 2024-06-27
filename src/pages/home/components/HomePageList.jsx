import { useQuery } from "@tanstack/react-query";
import { fetchHomePageData } from "../../../api/fetchHomePageData";
import AnimeCard from "../../../components/cards/AnimeCard";
import Loading from "../../../components/Loading";

function HomePageList({ filter, children }) {
  const { data, error, status } = useQuery({
    queryKey: ["homeAnime"],
    queryFn: () => fetchHomePageData(),
    staleTime: 60 * 1000 * 60,
  });

  if (status === "pending") return <Loading />;
  if (status === "error") return `Error: ${error.message}`;

  const renderList = data?.data[filter]?.media?.map((anime) => {
    return (
      <AnimeCard
        key={anime.id}
        title={anime.title.userPreferred}
        image={anime.coverImage.large}
        id={anime.id}
      />
    );
  });

  return (
    <div>
      <div className="flex justify-center">{children}</div>
      <div className="flex flex-wrap justify-center">{renderList}</div>
    </div>
  );
}

export default HomePageList;
