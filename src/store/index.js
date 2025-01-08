import { legacy_createStore } from "redux";
import dragonReducer from "./reducer/dragonReducer";

const store = legacy_createStore(dragonReducer);

export default store;
