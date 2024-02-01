import { configureStore } from '@reduxjs/toolkit';
import { incrementLikes, updateName } from './actions';
import { likesSelector, nameSelector } from './selectors';
import { reducer } from './reducers';

const store = configureStore({
  reducer
});

console.log('initial state : ', store.getState());

store.subscribe(() => {
  console.log('update store');
  console.log('likes : ', likesSelector(store.getState()));
  console.log('name : ', nameSelector(store.getState()));
});

store.dispatch(incrementLikes());
store.dispatch(updateName('Toto'));
