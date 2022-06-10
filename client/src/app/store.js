import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "../features/account/accountSlice";
import userReducer from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    account: accountReducer,
    user: userReducer,
  },
});
