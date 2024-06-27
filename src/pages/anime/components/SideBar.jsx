import SideBarInfo from "./SideBarInfo";
import InfoCard from "../../../components/cards/InfoCard";

function SideBar({ data }) {
  const rankings = data?.rankings.map((rank) => {
    if (!rank.allTime) return null;
    return (
      <InfoCard key={rank.id}>
        <SideBarInfo title={rank.type} data={rank.rank} />
      </InfoCard>
    );
  });

  return (
    <div className="flex flex-col gap-2 w-[230px]">
      <InfoCard>
        <SideBarInfo title="English" data={data.title.english} />
        <SideBarInfo title="Native" data={data.title.native} />
      </InfoCard>
      {rankings}
      <InfoCard>
        <SideBarInfo title="Format" data={data.format} />
        <SideBarInfo title="Status" data={data.status} capitalize={true} />
        <SideBarInfo
          title="Release"
          data={`${data.season} ${data.seasonYear}`}
          capitalize={true}
        />
        <SideBarInfo title="Episodes" data={data.episodes} />
      </InfoCard>
      <InfoCard>
        <SideBarInfo title="Source" data={data.source} capitalize={true} />
      </InfoCard>
    </div>
  );
}

export default SideBar;
