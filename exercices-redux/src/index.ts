import { reducer } from './store/reducers';
import { addTodo, updateNewTodo } from './store/actions';
import { todosCompletedSelector } from './store/selectors';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({ reducer });

store.subscribe(() => {
  console.log(store.getState());
  console.log(todosCompletedSelector(store.getState()));
});

store.dispatch(addTodo('XYZ'));

store.dispatch(updateNewTodo('XYZ123'));
