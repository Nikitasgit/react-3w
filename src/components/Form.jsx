import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDragon, setDragon } from "../store/action/action-types";

const Form = () => {
  const { name } = useSelector((state) => state.dragon);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const handleChange = (value) => {
    dispatch(setDragon(value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addDragon());
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        value={name}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button role="button" type="submit">
        Ajouter ce dragon
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Form;
