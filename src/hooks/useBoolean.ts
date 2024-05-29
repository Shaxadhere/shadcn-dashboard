import { useState } from "react";

const useBoolean = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);
  const toggle = () => setValue(!value);

  return { value, setTrue, setFalse, toggle };
};

export default useBoolean;
