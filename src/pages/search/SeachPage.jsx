import { Outlet } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import Content from "../../components/Content";

function SearchPage() {
  return (
    <Content>
      <SearchForm />
      <Outlet />
    </Content>
  );
}

export default SearchPage;
