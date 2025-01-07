import { useEffect, useState } from "react";
import { useGameContext } from "../context/userContext";
import { Link } from "react-router-dom";

const Home = () => {
  const [{ result, error }, dispatch] = useGameContext();
  const [times, setTimes] = useState(1);
  const handleInputChange = (value) => {
    if (/^\d+$/.test(value)) {
      setTimes(value);
    }
  };
  return (
    <>
      <section className="game-interface">
        <h3>Dernier lancé de dés:</h3>
        <ul>
          {result.length > 0 ? (
            result.map((num, i) => <li key={i}>{num}</li>)
          ) : (
            <h2>Lancez les dés!</h2>
          )}
        </ul>
        <label>
          Nombre d'expérience :
          <input
            type="number"
            value={times}
            min="1"
            onChange={(e) => handleInputChange(e.target.value)}
          />
        </label>
        <button onClick={() => dispatch({ type: "play", payload: times })}>
          Lancer
        </button>
        <Link to={"/results"}>Results</Link>
        {error && <p>{error}</p>}
      </section>
    </>
  );
};

export default Home;
