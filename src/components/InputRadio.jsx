import { Link } from "react-router-dom";

function InputRadio({ id, name, value, className }) {
  return (
    // <div
    //   className={`flex items-center w-20 bg-slate-200 dark:bg-slate-700 ${className}`}
    // >
    //   <button
    //     className="w-full p-2 hover:text-red-500 transition ease-in-out"
    //     name={name}
    //   >
    //     {value}
    //   </button>
    // </div>
    <div className="me-2">
      <Link
        to=""
        className="inline-block p-3 rounded-t-lg border-b-2 border-transparent hover:text-red-500  hover:border-slate-600"
      >
        {value}
      </Link>
    </div>
  );
}

export default InputRadio;
