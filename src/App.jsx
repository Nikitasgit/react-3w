import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Post from "./components/Post";
import NotFound from "./components/NotFound";
import User from "./components/User";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/post/:id"} element={<Post />} />
        <Route path={"/user/:id"} element={<User />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
