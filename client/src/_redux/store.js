import { createStore, combineReducers, applyMiddleware } from "redux";

import promise from "redux-promise-middleware";
import logger from "redux-logger";
import auth from "../_reducers/auth";
import ticket from "../_reducers/ticket";

// Global state
const reducers = combineReducers({ auth, ticket });

// Setup store for Redux
const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
