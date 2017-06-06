import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import loadingReducer from './loadingReducer';

const rootReducer = combineReducers({
  searchReducer,
  loadingReducer
});

export default rootReducer;