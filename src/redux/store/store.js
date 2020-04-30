import { applyMiddleware, createStore } from "redux";
import reducer from "../reducer/reducer";
// Logger with default options
import logger from "redux-logger";
import rootReducer from "../reducer/rootReducer";
const store = createStore(rootReducer, applyMiddleware(logger));
export default store;
