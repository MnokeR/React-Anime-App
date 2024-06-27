import { useState, useEffect } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

function ToggleDarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    const screenMode = localStorage.getItem("darkMode");
    return screenMode ? JSON.parse(screenMode) : true;
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

  return (
    <div className="text-xl">
      {!darkMode ? (
        <BsFillSunFill
          className="text-yellow-400 cursor-pointer"
          onClick={handleClick}
        />
      ) : (
        <BsFillMoonStarsFill
          className="text-blue-300 cursor-pointer"
          onClick={handleClick}
        />
      )}
    </div>
  );
}

export default ToggleDarkMode;
