import {
  ADD_DRAGON,
  ADD_LOG,
  DELETE_ALL_LOGS,
  DELETE_DRAGON,
  SET_DRAGON,
  SORT_RANDOM_DRAGON,
} from "../constants/action";

//DRAGONREDUCER
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

export const deleteDragon = (payload) => {
  return {
    payload,
    type: DELETE_DRAGON,
  };
};
export const sortRandomDragon = () => {
  return {
    type: SORT_RANDOM_DRAGON,
  };
};

//LOGREDUCER
export const addLog = () => {
  return {
    type: ADD_LOG,
  };
};
export const deleteAllLogs = () => {
  return {
    type: DELETE_ALL_LOGS,
  };
};
