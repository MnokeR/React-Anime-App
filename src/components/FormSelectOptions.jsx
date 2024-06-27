import { useQueryParams } from "../hooks/useQueryParams";

function FormSelectOptions({ name, options }) {
  const { setQueryParam, deleteQueryParam, getQueryParam } = useQueryParams();
  const renderOptions = options.map((option) => {
    return (
      <option key={option} value={option}>
        {option}
      </option>
    );
  });

  const handleChange = (e) => {
    if (e.target.value === "") {
      return deleteQueryParam(name);
    }
    setQueryParam(name, e.target.value);
  };

  return (
    <select
      className="bg-slate-200 dark:bg-slate-800 p-2 rounded-lg"
      name={name}
      onChange={handleChange}
      defaultValue={getQueryParam(name)}
    >
      <option value="">{name}</option>
      {renderOptions}
    </select>
  );
}

export default FormSelectOptions;
