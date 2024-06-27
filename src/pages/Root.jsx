import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../components/header/Header";
import ScrollToTop from "../components/ScrollToTop";

function Root() {
  return (
    <div className="relative">
      <Header />
      <Outlet />
      <ScrollToTop />
      <ScrollRestoration />
    </div>
  );
}
export default Root;
