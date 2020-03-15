import { TICKET, ADD_TICKET } from "../config/contants";

// State
const initState = {
  authenticated: false,
  user: null,
  message: null,
  loading: true
};

const ticket = (state = initState, action) => {
  switch (action.type) {
    case `${TICKET}_PENDING`:
    case `${ADD_TICKET}_PENDING`:
      // console.log(action.payload);
      return {
        ...state,
        loading: true,
        error: false
      };
    case `${TICKET}_FULFILLED`:
    case `${ADD_TICKET}_FULFILLED`:
      // console.log(action.payload);
      return {
        ...state,
        authenticated: true,
        data: action.payload,
        message: action.payload.message,
        loading: false,
        error: false
      };
    case `${TICKET}_REJECTED`:
    case `${ADD_TICKET}_REJECTED`:
      // console.log("rejected", action.payload.response.message);
      return {
        ...state,
        loading: false,
        message: action.payload.response.data.message,
        error: true
      };
    default:
      return state;
  }
};
export default ticket;
