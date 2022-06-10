import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import accountService from "./accountService";

const initialState = {
  accounts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Get all accounts
export const getAccounts = createAsyncThunk(
  "account/getAccounts",
  async (thunkAPI) => {
    try {
      return await accountService.getAccounts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// add new account
export const addAccount = createAsyncThunk(
  "account/addAccount",
  async (account, thunkAPI) => {
    try {
      return await accountService.addAccount(account);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


// update account
export const updateAccount = createAsyncThunk(
  "account/updateAccount",
  async (id, account, thunkAPI) => {
    try {
      return await accountService.updateAccount(id, account);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// delete account
export const deleteAccount = createAsyncThunk(
  "account/deleteAccount",
  async (id, thunkAPI) => {
    try {
      return await accountService.deleteAccount(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);





export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    resetAccounts: (state) => {
      state.accounts = [];
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAccounts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAccounts.fulfilled, (state, action) => {
      state.accounts = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(getAccounts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(addAccount.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addAccount.fulfilled, (state, action) => {
      state.accounts = [...state.accounts, action.payload];
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(addAccount.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(updateAccount.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateAccount.fulfilled, (state, action) => {
      state.accounts = state.accounts.map((account) =>
        account.id === action.payload.id ? action.payload : account
      );
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(updateAccount.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(deleteAccount.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteAccount.fulfilled, (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      state.isLoading = false;
      state.isSuccess = true;
    });
    builder.addCase(deleteAccount.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});






export const { resetAccounts } = accountSlice.actions;
export default accountSlice.reducer;
