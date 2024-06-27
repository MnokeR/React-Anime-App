import FormSelectionOptions from "../../../components/FormSelectOptions";
function TopAnimeSelect() {
  return (
    <div className="flex justify-center">
      <FormSelectionOptions name="Format" options={["TV", "Movie", "OVA"]} />
    </div>
  );
}

export default TopAnimeSelect;
