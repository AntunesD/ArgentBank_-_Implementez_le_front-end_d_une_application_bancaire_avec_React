import { updateToken, setUser } from "../redux/reducers/AuthReducer";

import { apiRequest } from "./apiRequest";

export const checkToken = () => {
  return async (dispatch) => {
    const localToken = localStorage.getItem("token");
    const sessionToken = sessionStorage.getItem("token");

    const cookieToken = CookieToken();

    const token = localToken || sessionToken || cookieToken;

    if (token) {
      dispatch(updateToken(token));
      const response = await apiRequest("post", "/profile", token);
      dispatch(setUser(response.body));
    }
  };
};

//Pour le token dans le cookie on pourrait faire :

const CookieToken = () => {
  const tokenFromCookies = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];

  return tokenFromCookies;
};
