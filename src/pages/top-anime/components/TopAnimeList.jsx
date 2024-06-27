import AnimeCard from "../../../components/cards/AnimeCard";
import { addDecimalToScore } from "../../../utils/addDecimalToScore";

function TopAnimeList({ data }) {
  const renderList = data?.pages.map((page) => {
    return page.media.map((anime) => {
      const score = addDecimalToScore(anime.averageScore);
      return (
        <AnimeCard
          key={anime.id}
          title={anime.title.userPreferred}
          image={anime.coverImage.large}
          id={anime.id}
          score={score}
        />
      );
    });
  });

  return <div className="flex flex-wrap justify-center">{renderList}</div>;
}

export default TopAnimeList;
