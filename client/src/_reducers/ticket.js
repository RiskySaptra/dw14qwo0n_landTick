import { TICKET } from "../config/contants";

// State
const initState = {
  authenticated: false,
  user: null,
  loading: true
};

const ticket = (state = initState, action) => {
  switch (action.type) {
    case `${TICKET}_PENDING`:
      // console.log(action.payload);
      return {
        ...state,
        loading: true,
        error: false
      };
    case `${TICKET}_FULFILLED`:
      // console.log(action.payload);
      return {
        ...state,
        authenticated: true,
        data: action.payload,
        loading: false,
        error: false
      };
    case `${TICKET}_REJECTED`:
      // console.log("rejected", action.payload.response.message);
      return {
        ...state,
        loading: false,
        error: action.payload.response.data.message
      };
    default:
      return state;
  }
};
export default ticket;
