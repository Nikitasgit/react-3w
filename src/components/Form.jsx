import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calcDenominations, setInput } from "../store/action/action-types";

const Form = () => {
  const [error, setError] = useState("");
  const inputValue = useSelector((state) => state.input);
  const dispatch = useDispatch();
  const handleInputChange = (value) => {
    if (/^[0-9]*$/.test(value)) {
      setError("");
      return dispatch(setInput(value));
    }
    return setError("Entrez des valeurs de type 'number'");
  };
  const handleCalc = (e) => {
    e.preventDefault();
    dispatch(calcDenominations());
  };
  return (
    <form onSubmit={(e) => handleCalc(e)}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <button role="button" type="submit">
        Calculer
      </button>
      <span>{error}</span>
    </form>
  );
};

export default Form;
