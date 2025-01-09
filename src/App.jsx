import Form from "./components/Form";
import List from "./components/List";
import Logs from "./components/Logs";

const App = () => {
  return (
    <>
      <h1>Créez votre liste de dragons</h1>
      <Form />
      <Logs />
      <List />
    </>
  );
};

export default App;
