import { legacy_createStore } from "redux";
import denominationReducer from "./reducer/denominationReducer";

const store = legacy_createStore(denominationReducer);

export default store;
