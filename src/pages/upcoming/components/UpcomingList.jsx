import FullCard from "../../../components/cards/FullCard";

function UpcomingList({ data }) {
  const renderList = data?.pages.map((pages) => {
    return pages?.media.map((anime) => {
      return (
        <FullCard
          key={anime?.id}
          id={anime?.id}
          image={anime?.coverImage?.large}
          title={anime?.title?.userPreferred}
          desc={anime?.description}
          genres={anime?.genres}
        />
      );
    });
  });
  return (
    <div className="flex flex-wrap justify-center gap-4">{renderList}</div>
  );
}

export default UpcomingList;
