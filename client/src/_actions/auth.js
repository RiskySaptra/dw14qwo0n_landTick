import { API, setAuthToken } from "../config/api";
import { LOGIN, REGISTER, AUTO_AUTH, LOGOUT } from "../config/contants";

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
export const userCheck = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return {
      type: AUTO_AUTH,
      payload: async () => {
        setAuthToken(token);
        const res = await API.get("/userCheck");
        // console.log("ressss", res.data.data);
        return res.data.data;
      }
    };
  } else {
    return {
      type: LOGOUT,
      payload: {}
    };
  }
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
