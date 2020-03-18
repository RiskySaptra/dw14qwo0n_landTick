import { API } from "../config/api";
import { STATION } from "../config/contants";

export const listStation = () => {
  // console.log("Get Ticket on");
  return {
    type: STATION,
    payload: async () => {
      const res = await API.get("/indexStation");
      // console.log("ressss", res.data.data);
      return res.data.data;
    }
  };
};
