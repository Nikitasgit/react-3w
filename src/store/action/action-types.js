import {
  CALC_DENOMINATION,
  SET_DENOMINATION,
  SET_INPUT,
} from "../constants/denomination";

export const setInput = (payload) => {
  return {
    type: SET_INPUT,
    payload,
  };
};
export const calcDenominations = () => {
  return {
    type: CALC_DENOMINATION,
  };
};
export const setDenomination = (payload) => {
  return {
    type: SET_DENOMINATION,
    payload,
  };
};
