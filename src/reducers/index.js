import { combineReducers } from 'redux';
import checkboxReducer from './checkbox';
import questionReducer from './questions';
import timerReducer from './timer';
import apiReducer from './apiReducer';
import gravatarReducer from './gravatarReducer';

const rootReducer = combineReducers({
  apiReducer,
  gravatarReducer,
  checkboxReducer,
  questionReducer,
  timerReducer,
});

export default rootReducer;
