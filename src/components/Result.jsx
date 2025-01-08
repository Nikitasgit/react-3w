import React from "react";
import { useSelector } from "react-redux";

const Result = () => {
  const result = useSelector((state) => state.result);
  const rest = useSelector((state) => state.rest);
  return (
    <>
      <ul>
        {result.map((el) => (
          <li key={el.denomination}>
            <span>Token </span>
            <span>{el.denomination}</span>
            <span> : </span>
            <span>{el.count}</span>
          </li>
        ))}
      </ul>
      {rest > 0 && (
        <h3>
          Il reste {rest}, car non pris en charge par la dénomination choisie
        </h3>
      )}
    </>
  );
};

export default Result;
