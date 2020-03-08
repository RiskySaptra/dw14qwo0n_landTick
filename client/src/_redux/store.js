import { createStore, combineReducers, applyMiddleware } from "redux";

import promise from "redux-promise-middleware";
import logger from "redux-logger";
import auth from "../_reducers/auth";

// Global state
const reducers = combineReducers({ auth });

// Setup store for Redux
const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
