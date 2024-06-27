function Genres({ genres }) {
  const renderGenres = genres.map((genre) => {
    return (
      <span key={genre} className="bg-red-600 px-2 rounded-full">
        {genre}
      </span>
    );
  });
  return (
    <div className="flex flex-wrap items-center text-sm gap-1 text-slate-50">
      {renderGenres}
    </div>
  );
}

export default Genres;
