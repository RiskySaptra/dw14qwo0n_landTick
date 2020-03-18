import { API } from "../config/api";
import { TRANSACTION } from "../config/contants";

export const listTransaction = () => {
  // console.log("Get Ticket on");
  return {
    type: TRANSACTION,
    payload: async () => {
      const res = await API.get("/indexTransaction");
      console.log("ressss", res.data.data);
      return res.data.data;
    }
  };
};
