import { createAsyncThunk } from "@reduxjs/toolkit";

const USERS_SLICE_NAME = "users";

export const decorateAsyncThunk = ({ type ,thunk }) => {
  return createAsyncThunk(type, async (params, thunkAPI) => {
    try {
      const {
        data: { data },
      } = await thunk(params);
      return data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  });
};

export const rejectReducer = (state, action) => {
  state.isFetching = true;
  state.error = null;
};

export const pendingReducer = (state, action) => {
  state.isFetching = false;
  state.error = action.payload;
};
