import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos";
const initialState = {
  todoList: [],
  isPending: false,
  error: "",
};

export const fetchTodo = createAsyncThunk("todo/fetch", async () => {
  const response = await axios.get(url);
  return response.data;
});

export const toggleTask = createAsyncThunk(
  "todo/toggle",
  async ({ id, toggle }) => {
    await axios.patch(`${url}/${id}`, {
      completed: toggle,
    });
    return { id, toggle };
  }
);

const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.todoList = action.payload;
      })
      .addCase(toggleTask.pending, (state) => {
        state.isPending = true;
      })
      .addCase(toggleTask.fulfilled, (state, action) => {
        state.isPending = false;
        state.error = "";
        const task = state.todoList.find(
          (task) => task.id === action.payload.id
        );
        if (task) {
          task.completed = action.payload.toggle;
        }
      })
      .addCase(toggleTask.rejected, (state) => {
        state.isPending = false;
        state.error =
          "Impossible de changer l'état de la tâche, veuillez réessayer plus tard.";
      });
  },
});

export default todoSlice.reducer;
