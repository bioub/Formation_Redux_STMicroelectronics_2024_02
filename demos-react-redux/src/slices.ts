import { combineSlices, createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  name: 'Romain',
  likes: 10,
};

const nameSlice = createSlice({
  name: 'name',
  initialState: initialState.name,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      return action.payload;
    }
  },
  selectors: {
    nameSelector(state) {
      return state;
    }
  }
});
const likesSlice = createSlice({
  name: 'likes',
  initialState: initialState.likes,
  reducers: {
    incrementLikes(state, _action: PayloadAction<void>) {
      return state + 1;
    }
  },
  selectors: {
    likesSelector(state) {
      return state;
    }
  }
});

export const { updateName } = nameSlice.actions;
export const { incrementLikes } = likesSlice.actions;
export const { nameSelector } = nameSlice.selectors;
export const { likesSelector } = likesSlice.selectors;

// export const reducer = {
//   name: nameSlice.reducer,
//   likes: likesSlice.reducer,
// };

export const reducer = combineSlices(nameSlice, likesSlice);
