import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <section>
        <h2> Error 404 Not Found</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </section>
    </>
  );
};

export default NotFound;
