import actionTypes from "./action-types";

export const addMovie = (payload)=> ({
    type: actionTypes.ADD_MOVIE,
    payload
})
export const deleteMovie = (payload) => ({
    type : actionTypes.DELETE_MOVIE,
    payload
})
export const updateMovie = (payload) => ({
    type: actionTypes.UPDATE_MOVIE,
    payload
})
export const searchKeyword = (payload)=> ({
    type: actionTypes.SEARCH_KEYWORD,
    payload
})
export const minRating = (payload)=> ({
    type: actionTypes.MIN_RATING,
    payload
})