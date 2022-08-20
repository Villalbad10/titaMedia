import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../redux/todo.slice";

export const store = configureStore({
   reducer: {
      todos: todoReducer
   }
})