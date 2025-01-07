import { createContext, useContext } from "react";
import useGameReducer from "../store";

const GameContext = createContext();

const GameContextProvider = ({ children }) => {
  const value = useGameReducer();

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
export const useGameContext = () => useContext(GameContext);
export default GameContextProvider;
