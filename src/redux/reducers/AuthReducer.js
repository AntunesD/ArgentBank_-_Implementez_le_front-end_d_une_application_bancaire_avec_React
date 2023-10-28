import { createSlice} from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    updateToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      //Pour le cookie 
      Cookies.remove('token');
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserName: (state, action) => {
      if (state.user) {
        state.user.userName = action.payload;
      }
    }
  },
});

export const { updateToken, logout, setUser,  setUserName } =
  authSlice.actions;

export default authSlice.reducer;
