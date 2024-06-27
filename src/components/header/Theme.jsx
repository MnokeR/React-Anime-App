import { useEffect, useState } from "react";
import { AiFillSun, AiFillMoon } from "react-icons/ai";

function Theme() {
  const [darkMode, setDarkMode] = useState(() => {
    const theme = localStorage.getItem("darkMode");
    return theme ? JSON.parse(theme) : true;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      if (darkMode) {
        htmlElement.classList.add("dark");
      } else {
        htmlElement.classList.remove("dark");
      }
    }
  }, [darkMode]);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  const renderMode = darkMode ? (
    <AiFillMoon onClick={handleClick} />
  ) : (
    <AiFillSun onClick={handleClick} />
  );

  return (
    <div
      className="flex-none text-2xl text-yellow-500 dark:text-gray-400 cursor-pointer ease-in-out duration-150 select-none"
      viewBox="0 0 24 24"
    >
      {renderMode}
    </div>
  );
}

export default Theme;
