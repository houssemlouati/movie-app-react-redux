import actionTypes from "../actions/action-types";

const INIT = { keyword };

const FilterReducer = (state = INIT, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_KEYWORD:
      return {
        keyword: action.payload,
      };
    default:
      return state;
  }
};
export default FilterReducer;
