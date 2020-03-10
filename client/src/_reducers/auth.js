import { AUTO_AUTH } from "../config/contants";

// State
const initState = {
  authenticated: false,
  user: null,
  loading: false
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case `${AUTO_AUTH}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false
      };
    case `${AUTO_AUTH}_FULFILLED`:
      // console.log(action.payload);
      return {
        ...state,
        authenticated: true,
        user: action.payload,
        loading: false,
        error: false
      };
    case `${AUTO_AUTH}_REJECTED`:
      // console.log("rejected", action.payload.response.message);
      return {
        ...state,
        loading: false,
        // message: action.payload.response.data.message,
        error: true
      };

    default:
      return state;
  }
};
export default auth;
