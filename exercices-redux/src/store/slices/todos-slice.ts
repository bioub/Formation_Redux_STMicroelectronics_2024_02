import { createAction, createSlice, PayloadAction, PrepareAction } from "@reduxjs/toolkit";
import { Todo, TodoSlice } from "../types";

const initialTodosSliceState: TodoSlice = {
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


export const { updateNewTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;