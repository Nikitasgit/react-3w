import { ADD_LOG, DELETE_ALL_LOGS } from "../constants/action";

const initialState = {
  logs: [],
};

const logReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LOG:
      return {
        ...state,
        logs: state.logs.concat([{ date: new Date().toISOString() }]),
      };
    case DELETE_ALL_LOGS:
      return {
        ...state,
        logs: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default logReducer;
