import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { UsersSlice } from '../types';
import { getAllUsers } from '../../users/api';

const initialUsersSliceState: UsersSlice = {
  items: [],
  loading: false,
  errorMessage: undefined,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', () => {
  return getAllUsers();
});

const usersSlice = createSlice({
  name: 'users',
  initialState: initialUsersSliceState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
      state.items = [];
      state.errorMessage = undefined;
    }).addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
      state.errorMessage = undefined;
    }).addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.items = [];
      console.log(action.payload);
      state.errorMessage = 'TEST';
    })
  },
  selectors: {
    usersSelector(state) {
      return state;
    }
  }
})

export const usersReducer = usersSlice.reducer;
export const { usersSelector} = usersSlice.selectors
