import FormSelectOptions from "../../../components/FormSelectOptions";
import { yearsFromCurrent } from "../../../utils/yearsFromCurrent";

function UpcomingOptions() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-row gap-2 justify-center">
        <FormSelectOptions
          name="Season"
          options={["Winter", "Spring", "Summer", "Fall"]}
        />
        <FormSelectOptions name="Year" options={yearsFromCurrent(2)} />
        <FormSelectOptions name="Format" options={["TV", "Movie", "OVA"]} />
      </div>
    </div>
  );
}

export default UpcomingOptions;
