import { applyMiddleware, legacy_createStore } from "redux";
import { basicReducer } from "./ReduxReducer";
import logger from "redux-logger";



const myStore = legacy_createStore(basicReducer,applyMiddleware(logger))

export default myStore