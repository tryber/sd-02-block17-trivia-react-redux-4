import { combineReducers } from 'redux';
import checkboxReducer from './checkbox';
import questionReducer from './questions';
import timerReducer from './timer';
import apiReducer from './apiReducer';
import gravatarReducer from './gravatarReducer';
import dropdownReducer from './dropdown';
import categorysAPIReducer from './categorysAPI';

const rootReducer = combineReducers({
  apiReducer,
  gravatarReducer,
  checkboxReducer,
  questionReducer,
  timerReducer,
  dropdownReducer,
  categorysAPIReducer,
});

export default rootReducer;
