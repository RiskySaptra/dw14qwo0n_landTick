import { API } from "../config/api";
import { TICKET, ADD_TICKET } from "../config/contants";

export const listTicket = () => {
  // console.log("Get Ticket on");
  return {
    type: TICKET,
    payload: async () => {
      const res = await API.get("/indexTicket");
      // console.log("ressss", res.data.data);
      return res.data.data;
    }
  };
};
export const addTicket = data => {
  // console.log("Get Ticket on");
  return {
    type: ADD_TICKET,
    payload: async () => {
      const res = await API.post("/addTicket", data);
      // console.log("ressss", res.data);
      return res.data;
    }
  };
};
