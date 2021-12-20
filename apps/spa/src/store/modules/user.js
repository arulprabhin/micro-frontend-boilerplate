import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { SET_USERNAME } from '../types';

const fetchUserById = createAsyncThunk(
  'user/fetchByIdStatus',
  async (userId, thunkAPI) => {
    const response = await userAPI.fetchById(userId)
    return response.data
  }
)

export const user = createSlice({
  name: 'user',
  initialState: { name: 'TU', age: 20 },
  reducers: {
    [SET_USERNAME]: (state, action) => {
      state.name = action.payload // mutate the state all you want with immer
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.name = action.payload.name;
        state.age = action.payload.age;
      });
  },
});
