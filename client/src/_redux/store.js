import { createStore, combineReducers, applyMiddleware } from "redux";

import promise from "redux-promise-middleware";
import logger from "redux-logger";
// auth
import auth from "../_reducers/auth";
// flowing data
import ticket from "../_reducers/ticket";
import user from "../_reducers/user";

// Global state
const reducers = combineReducers({ auth, ticket, user });

// Setup store for Redux
const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
