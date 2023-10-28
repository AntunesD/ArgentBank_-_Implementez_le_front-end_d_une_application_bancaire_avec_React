// store.js
import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer";
import AccountsReducer from "./reducers/AccountsReducer";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    accounts: AccountsReducer
  },
});

export default store;
