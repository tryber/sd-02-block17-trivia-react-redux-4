import { combineReducers } from 'redux';
import checkboxReducer from './checkbox';
import questionReducer from './questions';
import timerReducer from './timer';

const rootReducer = combineReducers({
  checkboxReducer,
  questionReducer,
  timerReducer,
});

export default rootReducer;
