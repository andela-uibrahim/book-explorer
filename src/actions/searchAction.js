import actionTypes from './actionTypes';
import setLoading from './LoadingAction';

export default (query) => {
  return (dispatch) => {
    setLoading.isLoading(dispatch, actionTypes);
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    fetch(`${BASE_URL}${query}`, { method: 'GET'})
      .then(response => response.json())
      .then(json => {
         setLoading.isNotLoading(dispatch,actionTypes);
         let { items } = json;
         dispatch({
           type: actionTypes.SEARCH_SUCCESSFUL,
           items,
           status: 'success'
         });
       })
      .catch((err) => {
         setLoading.isNotLoading(dispatch,actionTypes);
         dispatch({
           type: actionTypes.SEARCH_UNSUCCESSFUL,
           status: 'failed',
           error: err.message
         });
      });
   };
};