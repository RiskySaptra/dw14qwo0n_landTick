import { API, setAuthToken } from "../config/api";
import { AUTO_AUTH, NEED_LOGIN } from "../config/contants";

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
      type: NEED_LOGIN,
      payload: {}
    };
  }
};
