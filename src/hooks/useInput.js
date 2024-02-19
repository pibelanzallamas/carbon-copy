import { useState } from "react";

function useInput(property) {
  const [value, setValue] = useState(property);
  function onChange(event) {
    setValue(event.target.value);
  }

  return { value, onChange };
}

export default useInput;
