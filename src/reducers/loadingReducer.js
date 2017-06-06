/*eslint-disable no-undef*/
import actionTypes from '../actions/actionTypes';

/**
 * 
 * 
 * @export
 * @param {any} [state=initialState] 
 * @param {any} action 
 * @returns {state}:
 */
export default function loadingReducer(state = { isLoading: false }, action) {
  switch (action.type) {
    case actionTypes.LOADING:
      return Object.assign({}, state, {
         isLoading: action.isLoading
        });
    case actionTypes.NOT_LOADING:
    return Object.assign({}, state, {
         isLoading: action.isLoading
        });
    default:
      return state;
  }
}