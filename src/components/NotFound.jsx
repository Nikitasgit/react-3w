import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <h2>404 Not found.</h2>
      <button onClick={() => handleClick("/")}>Go Home</button>
      <button onClick={() => handleClick(-1)}>Go Back</button>
    </>
  );
};

export default NotFound;
