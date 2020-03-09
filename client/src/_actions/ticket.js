import { API } from "../config/api";
import { TICKET } from "../config/contants";

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
