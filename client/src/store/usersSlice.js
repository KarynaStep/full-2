import { createSlice } from '@reduxjs/toolkit';
import { getAllUsers, createUser, getOneUser, deleteUsers, updateUser } from '../api';
import { pendingReducer, rejectReducer, decorateAsyncThunk } from './helpers';

const USERS_SLICE_NAME = 'users';

export const getUsers = decorateAsyncThunk({
  type: `${USERS_SLICE_NAME}/getUsers`,
  thunk: getAllUsers
});
// export const getUsers = createAsyncThunk(
//   `${USERS_SLICE_NAME}/getUsers`,
//   async (params, thunkAPI) => {
//     try {
//       const {
//         data: { data },
//       } = await getAllUsers(params);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
export const addUser = decorateAsyncThunk({
  type: `${USERS_SLICE_NAME}/addUser`,
  thunk: createUser,
});

export const updateOneUser = decorateAsyncThunk({
  type: `${USERS_SLICE_NAME}/updateOneUser`,
  thunk: updateUser,
});

// export const addUser = createAsyncThunk(
//   `${USERS_SLICE_NAME}/addUser`,
//   async (params, thunkAPI) => {
//     try {
//       const {
//         data: { data },
//       } = await createUser(params);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const getUser = decorateAsyncThunk({
  type: `${USERS_SLICE_NAME}/getUser`,
  thunk: getOneUser,
});

// export const getUser = createAsyncThunk(
//   `${USERS_SLICE_NAME}/getUser`,
//   async (params, thunkAPI) => {
//     try {
//       const {
//         data: { data },
//       } = await getOneUser(params);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

export const delUser = decorateAsyncThunk({
  type: `${USERS_SLICE_NAME}/delUser`,
  thunk: deleteUsers,
});

// export const delUser = createAsyncThunk(
//   `${USERS_SLICE_NAME}/delUser`,
//   async (params, thunkAPI) => {
//     try {
//      const {data: {data}} =  await deleteUsers(params);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );


const usersSlice = createSlice({
  name: USERS_SLICE_NAME,
  initialState: {
    users: [],
    error: null,
    isFetching: false,
    userAuth: null,
    currentUser: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, pendingReducer);
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
      state.error = null;
    });
    builder.addCase(getUsers.rejected, rejectReducer);
    builder.addCase(addUser.pending, pendingReducer);
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.userAuth = action.payload;
    });
    builder.addCase(addUser.rejected, rejectReducer);
    builder.addCase(getUser.pending, pendingReducer);
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.currentUser = action.payload;
    });
    builder.addCase(getUser.rejected, rejectReducer);
    builder.addCase(delUser.pending, pendingReducer);
    builder.addCase(delUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.users = state.users.filter((user) => user.id !== action.payload.id);
    });
    builder.addCase(delUser.rejected, rejectReducer);
    builder.addCase(updateOneUser.pending, pendingReducer);
    builder.addCase(updateOneUser.fulfilled, (state, action) => {
      state.isFetching = false;
      state.error = null;
      state.currentUser = action.payload;
    });
    builder.addCase(updateOneUser.rejected, rejectReducer);
  },
});

export default usersSlice.reducer;
