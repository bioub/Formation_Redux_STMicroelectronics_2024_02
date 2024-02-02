import { todosCompletedSelector } from './store/selectors';
import { configureStore } from '@reduxjs/toolkit';
import { todosReducer,  addTodo, updateNewTodo } from './store/slices/todos-slice';

const store = configureStore({ reducer: {
  todos: todosReducer
} });

store.subscribe(() => {
  console.log(store.getState());
  console.log(todosCompletedSelector(store.getState()));
});

store.dispatch(addTodo('XYZ'));

store.dispatch(updateNewTodo('XYZ123'));
