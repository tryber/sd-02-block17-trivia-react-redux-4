import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import gravatarReducer from './gravatarReducer';

const rootReducer = combineReducers({
  apiReducer,
  gravatarReducer,
});

export default rootReducer;
