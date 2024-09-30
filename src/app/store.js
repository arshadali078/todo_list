// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
  reducer: {
    todos: todoReducer, // Ensure the key 'todos' matches how you select state in your component
  },
});
