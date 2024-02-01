import { PrepareAction, createAction } from "@reduxjs/toolkit";
import { Todo } from "./types";

export const updateNewTodo = createAction<string>('UPDATE_NEW_TODO');

export const addTodo = createAction<PrepareAction<Todo>>('ADD_TODO', (title: string) => {
  return {
    payload: {
      id: Math.random(),
      title,
      completed: false,
    },
  }
});
