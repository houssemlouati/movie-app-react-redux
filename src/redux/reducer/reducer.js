import movies from "../../data/movies-data";
import actionTypes from "../actions/action-types";

const INITIAL_STATE = {
  movies,
 
  countRating: 0,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case actionTypes.DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    case actionTypes.UPDATE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id ? { ...action.payload } : movie
        ),
      };
  
    case actionTypes.MIN_RATING:
        return {
            ...state,
            countRating: action.payload
        }

    default:
      return state;
  }
};
export default reducer;