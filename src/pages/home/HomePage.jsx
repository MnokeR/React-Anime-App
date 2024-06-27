import { Link } from "react-router-dom";
import HomePageList from "./components/HomePageList";
import Title from "../../components/Title";
import Content from "../../components/Content";

function HomePage() {
  return (
    <Content>
      <HomePageList filter="trending">
        <Title title={["TRENDING", "NOW"]} />
      </HomePageList>
      <HomePageList filter="season">
        <Title title={["SEASON", "POPULAR"]} />
      </HomePageList>
      <HomePageList filter="nextSeason">
        <Title title={["NEXT", "SEASON"]} />
      </HomePageList>
      <HomePageList filter="popular">
        <Title title={["MOST", "POPULAR"]} />
      </HomePageList>
      <HomePageList filter="top">
        <Link to="top">
          <Title title={["TOP", "RATED"]} />
        </Link>
      </HomePageList>
    </Content>
  );
}

export default HomePage;
