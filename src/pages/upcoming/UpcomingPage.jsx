import { Outlet } from "react-router-dom";
import Content from "../../components/Content";
import UpcomingOptions from "./components/UpcomingOptions";
function UpcomingPage() {
  return (
    <Content>
      <UpcomingOptions />
      <Outlet />
    </Content>
  );
}

export default UpcomingPage;
