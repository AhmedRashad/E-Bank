import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
  users: [],
  user: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get all users
export const getUsers = createAsyncThunk("user/getUsers", async (thunkAPI) => {
  try {
    return await userService.getUsers();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// register new user
export const register = createAsyncThunk(
  "user/register",
  async (user, thunkAPI) => {
    try {
      return await userService.register(user);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// login user
export const login = createAsyncThunk("user/login", async (user, thunkAPI) => {
  try {
    return await userService.login(user);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// get user by id
export const getUser = createAsyncThunk("user/getUser", async (thunkAPI) => {
  try {
    return await userService.getUser();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// logout user
export const logout = createAsyncThunk("user/logout", async (thunkAPI) => {
  try {
    return await userService.logout();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

// update user  status
export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (id, status, thunkAPI) => {
    try {
      return await userService.updateUser(id, status);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    rest: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(logout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = {};
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.users = state.users.map((user) => {
        if (user._id === action.payload._id) {
          return action.payload;
        }
        return user;
      });
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const { rest } = userSlice.actions;
export default userSlice.reducer;
