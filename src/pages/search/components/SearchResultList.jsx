import Title from "../../../components/Title";
import AnimeCard from "../../../components/cards/AnimeCard";
function SearchResultList({ data, term }) {
  const renderResults = data?.pages.map((page) => {
    return page.media.map((anime) => {
      return (
        <AnimeCard
          key={anime.id}
          title={anime.title.userPreferred}
          image={anime.coverImage.large}
          id={anime.id}
        />
      );
    });
  });

  return (
    <div>
      <Title title={["SEARCH", "RESULTS"]} />
      <div className="text-center italic">{term && `"${term}"`}</div>
      <div className="flex justify-center flex-wrap">{renderResults}</div>
    </div>
  );
}

export default SearchResultList;
