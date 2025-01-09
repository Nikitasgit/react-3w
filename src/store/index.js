import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../store/slices/todoSlice.js";
const store = configureStore({
  reducer: {
    todoReducer,
  },
});

export default store;
