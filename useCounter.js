import { useState } from "react";

export const useCounter = (initialState = 18) => {
  const [counter, setCounter] = useState(initialState);
  const incrementar = () => {
    setCounter(counter + 1);
  };
  const decrementar = (factor = 1) => {
    setCounter(counter - factor);
  };
  const reset = () => {
    setCounter(initialState);
  };

  return {
    counter,
    incrementar,
    decrementar,
    reset,
  };
};
