import { BsArrowUp } from "react-icons/bs";
import { useState, useEffect } from "react";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Checks if page top is out of view
      if (window.scrollY > 20) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean scroll event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    showButton && (
      <div
        className={`fixed bottom-2 right-2 size-10 flex items-center justify-center py-1 bg-red-500/80 transition ease-in-out duration-300 rounded-lg ${
          showButton
            ? "opacity-100 cursor-pointer hover:bg-red-700/80"
            : "opacity-0"
        }`}
        onClick={handleClick}
      >
        <BsArrowUp className={`text-lg text-slate-200`} />
      </div>
    )
  );
}

export default ScrollToTop;
