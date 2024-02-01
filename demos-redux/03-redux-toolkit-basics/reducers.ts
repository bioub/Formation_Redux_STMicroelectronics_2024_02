import { createReducer } from '@reduxjs/toolkit';
import { incrementLikes, updateName } from './actions';

const initialState = {
  name: 'Romain',
  likes: 10,
};

// export function reducer(state = initialState, action: any) {
//   switch (action.type) {
//     case incrementLikes.type:
//       return {
//         ...state,
//         likes: state.likes + 1,
//       };
//     case updateName.type:
//       return {
//         ...state,
//         name: action.payload,
//       };
//     default:
//       return state;
//   }
// }

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementLikes, (state, action) => {
      state.likes++;
    })
    .addCase(updateName, (state, action) => {
      state.name = action.payload;
    });
});
