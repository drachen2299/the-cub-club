import { useState } from "react";

const useToggle = 
(initialState = false) => {
  const [toggle, setToggle] = useState(initialState);

  const flipToggle = () => {
    setToggle(!toggle);
  }

  return [toggle, flipToggle];
}

export default useToggle;