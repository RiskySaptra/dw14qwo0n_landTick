import { AUTO_AUTH, LOGIN, LOGOUT, REGISTER } from "../config/contants";

// State
const initState = {
  authenticated: false,
  user: null,
  loading: false
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case `${AUTO_AUTH}_PENDING`:
    case `${LOGIN}_PENDING`:
    case `${REGISTER}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false
      };
    case `${AUTO_AUTH}_FULFILLED`:
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
    case `${AUTO_AUTH}_REJECTED`:
    case `${LOGIN}_REJECTED`:
    case `${REGISTER}_REJECTED`:
      // console.log("rejected", action.payload.response.message);
      return {
        ...state,
        loading: false,
        error: action.payload.response.data.message
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
export default auth;
