import { ADD_DRAGON, SET_DRAGON } from "../constants/action";

export const addDragon = () => {
  return {
    type: ADD_DRAGON,
  };
};

export const setDragon = (payload) => {
  return {
    payload,
    type: SET_DRAGON,
  };
};
