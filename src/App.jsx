import { useState } from "react";
import Form from "./components/Form";
import UsersList from "./components/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  return (
    <>
      <Form setUsers={setUsers} users={users} />
      <UsersList users={users} />
    </>
  );
}

export default App;
