import { calculateDenominations } from "../../functions/calcDenominations";

import {
  CALC_DENOMINATION,
  SET_DENOMINATION,
  SET_INPUT,
} from "../constants/denomination";

const initialState = {
  denominations: [
    [1, 5, 10, 20, 50, 100],
    [1, 10, 20, 30, 40, 50, 100],
    [1, 2, 5, 10, 20, 30, 50],
  ],
  currentDenomination: [1, 5, 10, 20, 50, 100],
  newDenomination: [],
  input: 0,
  result: [],
  rest: 0,
  error: "",
};

const denominationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        input: action.payload,
        error: "",
      };

    case CALC_DENOMINATION:
      const { result, rest } = calculateDenominations(
        state.currentDenomination,
        state.input
      );
      return {
        ...state,
        result: result,
        rest: rest,
      };
    case SET_DENOMINATION:
      return {
        ...state,
        currentDenomination: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default denominationReducer;
