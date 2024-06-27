import ScrollToTop from "./ScrollToTop";

function Title({ title }) {
  return (
    <h1 className="text-lg text-center mt-4 mb-2">
      {title[0]}
      <span className="text-red-500 font-semibold">{title[1]}</span>
    </h1>
  );
}

export default Title;
