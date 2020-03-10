import { LOGIN, LOGOUT, REGISTER } from "../config/contants";

// State
const initState = {
  authenticated: false,
  user: null,
  loading: false
};

const user = (state = initState, action) => {
  switch (action.type) {
    case `${LOGIN}_PENDING`:
    case `${REGISTER}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false
      };
    case `${LOGIN}_FULFILLED`:
    case `${REGISTER}_FULFILLED`:
      // console.log(action.payload);
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false,
        error: false
      };
    case `${LOGIN}_REJECTED`:
    case `${REGISTER}_REJECTED`:
      // console.log("rejected", action.payload.response.message);
      return {
        ...state,
        loading: false,
        message: action.payload.response.data.message,
        error: true
      };
    case `${LOGOUT}`:
      return {
        ...state,
        authenticated: false,
        user: null,
        loading: false,
        error: null
      };

    default:
      return state;
  }
};
export default user;
