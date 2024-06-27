import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchDetailsData } from "../../api/fetchDetailsData";
import Loading from "../../components/Loading";
import Banner from "./components/Banner";
import CoverImage from "./components/CoverImage";
import Description from "./components/Description";
import Characters from "./components/Characters";
import SideBar from "./components/SideBar";
import InfoCard from "../../components/cards/InfoCard";

function AnimePage() {
  const params = useParams();
  const id = params.animeId;
  const { data, isFetching, isError, error } = useQuery({
    queryKey: ["anime", id],
    queryFn: () => fetchDetailsData(id),
    staleTime: 60 * 1000 * 60,
  });

  if (isFetching) return <Loading />;
  if (isError) return `Error: ${error}`;

  return (
    <>
      <Banner
        bannerImage={data.bannerImage}
        coverImage={data.coverImage.extraLarge}
        score={data.averageScore}
      />
      <div className="max-w-[1200px] mx-auto mb-4">
        <div className="flex flex-col justify-center ">
          <div className="flex flex-wrap justify-center my-2 gap-4">
            <CoverImage data={data} />
            <Description data={data} />
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <div className="flex-none max-w-[230px]">
            <SideBar data={data} />
          </div>
          <InfoCard className="flex-1 overflow-auto max-h-[290px] scrollbar">
            <Characters data={data} />
          </InfoCard>
        </div>
      </div>
    </>
  );
}

export default AnimePage;
