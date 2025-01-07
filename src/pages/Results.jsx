import { useGameContext } from "../context/gameContext";

const Results = () => {
  const [{ gamePlayed, win }, _] = useGameContext();
  return (
    <>
      <section>
        <h2>Parties jouées: {gamePlayed}</h2>
        <h3>Parties Gagnées: {win}</h3>
      </section>
    </>
  );
};

export default Results;
