import { useSelector } from "react-redux";
import Form from "./components/Form";
import { useEffect } from "react";

const App = () => {
  const dragons = useSelector((state) => state.dragons);
  useEffect(() => {
    console.log(dragons);
  }, [dragons]);
  return (
    <>
      <Form />
      <ul>
        {dragons.length ? (
          dragons.map((dragon) => <h3>{dragon.name}</h3>)
        ) : (
          <p>Pas de dragons</p>
        )}
      </ul>
    </>
  );
};

export default App;
