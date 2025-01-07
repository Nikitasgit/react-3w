import { StrictMode } from "react";
import "./style/index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import GameContextProvider from "./context/gameContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GameContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GameContextProvider>
  </StrictMode>
);
