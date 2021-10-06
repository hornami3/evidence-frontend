import { useState } from "react";

const useInput = (value?: string) => {
  const [isTouched, setIsTouched] = useState(false);
  const [enteredValue, setEnteredValue] = useState(value ?? '');

  const isValid = enteredValue.trim() !== '';
  const hasError = isTouched && !isValid;

  const inputChangedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  }

  const inputBlurHandler = () => {
    setIsTouched(true);
  }

  return {
    isValid, 
    hasError,
    enteredValue,
    inputChangedHandler,
    inputBlurHandler,
  }
};

export default useInput;