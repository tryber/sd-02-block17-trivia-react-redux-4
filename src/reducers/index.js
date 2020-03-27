import { combineReducers } from 'redux';
import checkboxReducer from './checkbox';
import questionReducer from './questions';
import timerReducer from './timer';
import { apiReducer, tokenReducer } from './apiReducer';
import gravatarReducer from './gravatarReducer';

const rootReducer = combineReducers({
  apiReducer,
  tokenReducer,
  gravatarReducer,
  checkboxReducer,
  questionReducer,
  timerReducer,
});

export default rootReducer;
