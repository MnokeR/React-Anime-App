import { useSearchParams } from "react-router-dom";

export const useQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getQueryParam = (paramName, defaultValue) => {
    return searchParams.get(paramName) || defaultValue;
  };

  const setQueryParam = (paramName, paramValue) => {
    setSearchParams((prevParam) => {
      prevParam.set(paramName, paramValue);
      return prevParam;
    });
  };

  const deleteQueryParam = (paramName) => {
    searchParams.delete(paramName);
    setSearchParams(searchParams);
  };

  return { getQueryParam, setQueryParam, deleteQueryParam };
};
