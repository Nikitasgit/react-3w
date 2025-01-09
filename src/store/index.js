import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import dragonReducer from "./reducer/dragonReducer";
import logReducer from "./reducer/logReducer";
import { logMiddleware } from "./middleware/logMiddleware";

const store = legacy_createStore(
  combineReducers({
    logReducer,
    dragonReducer,
  }),
  applyMiddleware(logMiddleware)
);

export default store;
