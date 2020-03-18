import { createStore, combineReducers, applyMiddleware } from "redux";

import promise from "redux-promise-middleware";
import logger from "redux-logger";

// auth
import auth from "../_reducers/auth";

// Data Flow
import ticket from "../_reducers/ticket";
import user from "../_reducers/user";
import transaction from "../_reducers/transaction";
import station from "../_reducers/station";

// Global state
const reducers = combineReducers({ auth, ticket, user, transaction, station });

// Setup store for Redux
const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
