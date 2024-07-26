import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

const useURLState = (initialState: any) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const defaultState = useMemo(() => {
    const state = Object.fromEntries(searchParams);
    return Object.keys(state).length ? state : initialState;
  }, [initialState]);

  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const search = new URLSearchParams(state);
    setSearchParams(search);
  }, [state]);
  return [state, setState];
};
export default useURLState;
