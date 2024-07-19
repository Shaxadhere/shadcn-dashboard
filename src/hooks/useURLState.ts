import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useURLState = (initialState) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState(() => {
    const state = Object.fromEntries(searchParams);
    return Object.keys(state).length ? state : initialState;
  });

  useEffect(() => {
    const search = new URLSearchParams(state);
    setSearchParams(search);
  }, [state]);
  return [state, setState];
};
export default useURLState;
