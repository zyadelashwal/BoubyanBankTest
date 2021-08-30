import { FETCHING_COUNTRIES, FETCH_COUNTRIES_SUCCESS, FETCH_COUNTRIES_FAILURE } from '../../scripts/constants.js';

const initialState = {
    Countries: [],
    isFetching: false,
    error: false
}
/**
 * 
 * @param {*} state 
 * @param {*} action 
 * @returns 
 */
export default function CategoriesReducer(state = initialState, action) {
    switch(action.type) {
        case FETCHING_COUNTRIES:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_COUNTRIES_SUCCESS:
            console.log(action.data)
            return {
                ...state,
                isFetching: false,
                Countries: action.data
            }
        case FETCH_COUNTRIES_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
}