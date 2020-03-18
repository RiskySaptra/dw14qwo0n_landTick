import { TRANSACTION } from "../config/contants";

// State
const initState = {
  authenticated: false,
  user: null,
  message: null,
  loading: true
};

const transaction = (state = initState, action) => {
  switch (action.type) {
    case `${TRANSACTION}_PENDING`:
      // console.log(action.payload);
      return {
        ...state,
        loading: true,
        error: false
      };
    case `${TRANSACTION}_FULFILLED`:
      //   console.log(action.payload);
      return {
        ...state,
        authenticated: true,
        data: action.payload,
        message: action.payload.message,
        loading: false,
        error: false
      };
    case `${TRANSACTION}_REJECTED`:
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
export default transaction;
