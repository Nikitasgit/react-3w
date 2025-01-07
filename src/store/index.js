import { useReducer } from "react";
import { playGame } from "../functions/game";

export const initialState = {
  result: [],
  win: 0,
  gamePlayed: 0,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "play":
      if (action.payload > 0 && action.payload < 1000000) {
        const result = playGame(action.payload);
        return {
          ...state,
          result: result.lastResult,
          gamePlayed: state.gamePlayed + parseInt(action.payload),
          win: state.win + result.win,
          error: "",
        };
      } else
        return {
          ...state,
          error: "Entrez une valeur entre 1 et 1 000 000",
        };
    default:
      return state;
  }
};

const useGameReducer = () => useReducer(reducer, initialState);

export default useGameReducer;
