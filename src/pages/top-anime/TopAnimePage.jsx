import TopAnimeOptions from "./components/TopAnimeOptions";
import { Outlet } from "react-router-dom";
import Content from "../../components/Content";

function TopAnimePage() {
  return (
    <Content>
      <TopAnimeOptions />
      <Outlet />
    </Content>
  );
}

export default TopAnimePage;
