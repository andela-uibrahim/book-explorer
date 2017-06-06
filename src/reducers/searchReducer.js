/*eslint-disable no-undef*/
import actionTypes from '../actions/actionTypes';
import initialState from '../store/initialState';

/**
 * 
 * 
 * @export
 * @param {any} [state=initialState] 
 * @param {any} action 
 * @returns {state}:
 */
export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_SUCCESSFUL:
      return Object.assign({}, state, {
         items: action.items,
         message: action.message
      });
    case actionTypes.SEARCH_UNSUCCESSFUL:
    return Object.assign({}, state, {
        status: 'failed',
        error: action.message
     });
    default:
      return state;
  }
}