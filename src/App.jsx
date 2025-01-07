import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Results from "./pages/Results";
import Instructions from "./pages/Instructions";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/instructions"} element={<Instructions />} />
        <Route path={"/results"} element={<Results />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
