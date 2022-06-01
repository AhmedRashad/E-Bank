import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../features/account/accountSlice";

export const store = configureStore({
  reducer: {
    account: accountReducer,
  },
});
