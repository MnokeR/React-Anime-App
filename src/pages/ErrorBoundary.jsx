import { useRouteError } from "react-router-dom";

function ErrorBoundary() {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-lg">Oops! Something went wrong.</div>
      <div className=" text-lg italic">
        "{error.status}" {error.statusText}
      </div>
    </div>
  );
}

export default ErrorBoundary;
