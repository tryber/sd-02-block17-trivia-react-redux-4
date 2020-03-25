import { combineReducers } from 'redux';
import checkboxReducer from './checkbox';
import questionReducer from './questions';

const rootReducer = combineReducers({
  checkboxReducer,
  questionReducer
});

export default rootReducer;
