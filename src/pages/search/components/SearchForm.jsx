import { useNavigate } from "react-router-dom";
import { yearsFromCurrent } from "../../../utils/yearsFromCurrent";
import FormSelectOptions from "../../../components/FormSelectOptions";

function SearchForm() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?`);
  };

  return (
    <div className="flex justify-center">
      <form>
        <div>
          <input
            className="bg-slate-200 dark:bg-slate-800 p-2 w-full rounded-lg"
            name="term"
            type="text"
            placeholder="Search"
            onSubmit={handleSubmit}
          />
        </div>

        <div className="flex flex-row gap-2 justify-center mt-2">
          <FormSelectOptions
            name="Season"
            options={["Winter", "Spring", "Summer", "Fall"]}
          />
          <FormSelectOptions name="Year" options={yearsFromCurrent(-40)} />
          <FormSelectOptions name="Format" options={["TV", "Movie"]} />
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
