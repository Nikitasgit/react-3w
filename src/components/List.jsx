import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDragon, sortRandomDragon } from "../store/action/action-types";

const List = () => {
  const dragons = useSelector((state) => state.dragons);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteDragon(id));
  };
  const handleRandomClick = () => {
    dispatch(sortRandomDragon());
  };
  return (
    <>
      <ul>
        {dragons.length ? (
          dragons.map((dragon) => (
            <li key={dragon.id}>
              <h3>{dragon.name}</h3>
              <button onClick={() => handleDelete(dragon.id)}>Supprimer</button>
            </li>
          ))
        ) : (
          <p>Pas de dragons</p>
        )}
      </ul>
      <button onClick={handleRandomClick}>Mélanger</button>
    </>
  );
};

export default List;
