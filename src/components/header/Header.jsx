import Logo from "./Logo";
import Theme from "./Theme";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex flex-wrap w-full h-16 px-1 overflow-hidden bg-gray-200 dark:bg-slate-800 items-center justify-between shadow dark:shadow-slate-800">
      <div className="flex-none">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="flex-1">
        <Navbar />
      </div>
      <div className="flex-none">
        <Theme />
      </div>
    </div>
  );
}

export default Header;
