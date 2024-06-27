import { Link } from "react-router-dom";

function AnimeCard({ title, image, id, score }) {
  const cleanTitle = title.replace(/\//g, "");
  return (
    <div className="relative flex flex-col flex-wrap text-center max-w-[180px] m-2">
      <div className="bg-slate-200 dark:bg-slate-800 shadow-md dark:shadow-slate-900 rounded-md p-2">
        <Link to={`/anime/${id}/${encodeURIComponent(cleanTitle)}`}>
          <img
            src={image}
            alt={title}
            className="w-[180px] h-[240px] rounded-md hover:scale-105 transition ease-in-out duration-125 cursor-pointer"
          />
        </Link>
        {score ? (
          <span className="absolute top-0 right-0 bg-red-600/80 text-white rounded-full shadow px-1 text-sm">
            {score}
          </span>
        ) : (
          ""
        )}
      </div>
      {title ? (
        <p className="text-sm line-clamp-1 text-wrap mt-2">{title}</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default AnimeCard;
