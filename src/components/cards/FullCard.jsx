import { Link } from "react-router-dom";
import HTMLReactParser from "html-react-parser/lib/index";
import Genres from "../Genres";

HTMLReactParser;

function FullCard({ id, image, title, desc, genres }) {
  const cleanTitle = title.replace(/\//g, "");
  return (
    // <div className="flex flex-wrap w-full rounded-md bg-slate-200 dark:bg-slate-800 p-2 gap-2">
    //   <div className="flex-none">
    //     <Link to={`/anime/${id}/${encodeURIComponent(cleanTitle)}`}>
    //       <img className="w-24 min-h-[136px]" src={image} />
    //     </Link>
    //   </div>
    //   <div className="flex flex-col flex-1">
    //     <div className="flex-1">
    //       <Link to={`/anime/${id}/${encodeURIComponent(cleanTitle)}`}>
    //         <h1 className="font-semibold">{title}</h1>
    //       </Link>
    //       <p className="line-clamp-3 text-sm text-slate-600 dark:text-slate-400">
    //         {HTMLReactParser(desc || "")}
    //       </p>
    //     </div>
    //     <div className="flex-none">
    //       <Genres genres={genres} />
    //     </div>
    //   </div>
    // </div>
    <Link to={`/anime/${id}/${encodeURIComponent(cleanTitle)}`}>
      <div className="flex w-[500px] rounded-md bg-slate-200 dark:bg-slate-800 p-2 gap-2 hover:bg-slate-300 hover:dark:bg-slate-700 transition ease-in-out duration-200">
        <div className="flex-none">
          <img className="w-40" src={image} alt={title}></img>
        </div>

        <div className="flex flex-col">
          <div className="flex-1">
            <h1 className="text-balance font-semibold ">{title}</h1>
            <p className=" line-clamp-5 text-sm text-slate-600 dark:text-slate-400">
              {HTMLReactParser(desc || "")}
            </p>
          </div>
          <div className="flex-none">
            <Genres genres={genres} />
          </div>
        </div>
      </div>
    </Link>
  );
}
export default FullCard;
