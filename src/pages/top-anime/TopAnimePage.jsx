import TopAnimeSelect from "./components/TopAnimeSelect";
import { Outlet } from "react-router-dom";
import Content from "../../components/Content";

function TopAnimePage() {
  return (
    <Content>
      <TopAnimeSelect />
      <Outlet />
    </Content>
  );
}

export default TopAnimePage;
