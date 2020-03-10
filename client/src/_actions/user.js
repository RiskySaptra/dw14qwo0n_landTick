import { API } from "../config/api";
import { LOGIN, REGISTER, LOGOUT } from "../config/contants";

export const login = data => {
  console.log("login on");
  return {
    type: LOGIN,
    payload: async () => {
      // console.log(data);
      const res = await API.post("/login", data);
      localStorage.setItem("token", res.data.data.token);
      return res.data.data;
    }
  };
};

export const register = data => {
  console.log("register on");
  return {
    type: REGISTER,
    payload: async () => {
      const res = await API.post("/register", data);
      // console.log("Move", res.data.data);
      return res.data.data;
    }
  };
};

export const logout = () => {
  console.log("logout on");
  return {
    type: LOGOUT,
    payload: async () => {
      localStorage.removeItem("token");
    }
  };
};
