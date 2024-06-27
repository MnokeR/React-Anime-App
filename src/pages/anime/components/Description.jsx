import HTMLReactParser from "html-react-parser/lib/index";
import Genres from "../../../components/Genres";
import { useState } from "react";

function Description({ data }) {
  const [isReadMore, setIsReadMore] = useState(false);

  const handleClick = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="flex flex-col flex-1">
      <div className="flex-1">
        <h1 className="font-semibold text-xl mb-2">{data.title.romaji}</h1>
        <div>
          <p
            className={`${
              isReadMore ? "" : "line-clamp-6"
            } transition-max-h ease-in-out duration-300`}
          >
            {HTMLReactParser(data.description)}
          </p>
        </div>
        <div className="flex justify-center mb-1">
          <button onClick={handleClick}>
            {!isReadMore ? "Read More" : "Read Less"}
          </button>
        </div>
      </div>
      <div className="flex-none">
        <Genres genres={data.genres} />
      </div>
    </div>
  );
}

export default Description;
