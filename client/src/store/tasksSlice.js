import { createSlice } from "@reduxjs/toolkit";
import { pendingReducer, rejectReducer, decorateAsyncThunk } from "./helpers";
import { getAllUsersTasks } from "../api";

const TASKS_SLICE_NAME = "tasks";

export const getUserTasks = decorateAsyncThunk({
  type: `${TASKS_SLICE_NAME}/getUserTasks`,
  thunk: getAllUsersTasks,
});

const tasksSlice = createSlice({
  name: TASKS_SLICE_NAME,
  initialState: {
    tasks: [],
    error: null,
    isFetching: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserTasks.pending, pendingReducer);
    builder.addCase(getUserTasks.fulfilled, (state, action) => {
      state.isFetching = false;
      state.tasks = action.payload;
      state.error = null;
    });
    builder.addCase(getUserTasks.rejected, rejectReducer);
  },
});

export default tasksSlice.reducer;
