import { createAction, createSlice, PayloadAction, PrepareAction } from "@reduxjs/toolkit";
import { TodosSlice } from "../types";
import { Todo } from "../../todos/types";

const initialTodosSliceState: TodosSlice = {
  newTodo: 'XYZ',
  items: [
    { id: 1, title: 'ABC', completed: true },
    { id: 2, title: 'DEF', completed: false },
    { id: 3, title: 'HIJ', completed: true },
  ],
};

export const addTodo = createAction<PrepareAction<Todo>>('todos/addTodo', (title: string) => {
  return {
    payload: {
      id: Math.random(),
      title,
      completed: false,
    },
  }
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: initialTodosSliceState,
  reducers: {
    updateNewTodo(state, action: PayloadAction<string>) {
      state.newTodo = action.payload;
    },
    removeTodo(state, action: PayloadAction<Todo>) {
      // version 1 muable
      // const i = state.items.findIndex((el) => el.id === action.payload.id)
      // state.items.splice(i, 1);

      // version 2 muable (mais immuable en partie)
      // state.items = state.items.filter((el) => el.id !== action.payload.id)

      // version 3 complètement immuable (return indique que je ne veux pas
      // utiliser immer)
      return {
        ...state,
        items: state.items.filter((el) => el.id !== action.payload.id),
      };
    }
  },
  extraReducers(builder) {
    builder.addCase(addTodo, (state, action: PayloadAction<Todo>) => {
      state.items.push(action.payload)
      // return {
      //   ...state,
      //   items: [
      //     ...state.items,
      //     action.payload,
      //   ]
      // }
    });
  }
});


export const { updateNewTodo, removeTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
