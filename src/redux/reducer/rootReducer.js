import { combineReducers } from "redux";
import FilterReducer from "./filterReducer";
import reducer from "./reducer";

const rootReducer = combineReducers({
  keyword: FilterReducer,
  movies: reducer,
  countRaing: reducer,
});
export default rootReducer