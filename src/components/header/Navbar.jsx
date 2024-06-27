import { NavLink } from "react-router-dom";
import { seasonOfYear } from "../../utils/seasonOfYear";

function Navbar() {
  const { nextSeason, seasonYear } = seasonOfYear();
  const links = [
    { label: "Home", path: "/" },
    { label: "Search", path: "/search" },
    { label: "Top", path: "/top" },
    {
      label: "Upcoming",
      path: `/upcoming?Season=${nextSeason}&Year=${seasonYear}`,
    },
  ];

  const active = "text-red-500 font-bold select-none font-sans";
  const inActive =
    "dark:text-slate-200 font-sans hover:text-red-500 select-none transition ease-in duration-100";

  const renderedLinks = links.map((link) => {
    return (
      <NavLink
        key={link.label}
        to={link.path}
        className={({ isActive }) => {
          return isActive ? active : inActive;
        }}
      >
        {link.label}
      </NavLink>
    );
  });
  return (
    <div className="flex gap-4 text-slate-800 justify-center">
      {renderedLinks}
    </div>
  );
}

export default Navbar;
