import { configureStore } from '@reduxjs/toolkit';
import { likesSelector, nameSelector, incrementLikes, updateName, reducer } from './slices';

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
