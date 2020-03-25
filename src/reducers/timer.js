import { RESET_TIMER, ADD_COUNTER } from '../actions/timer';

const INITIAL_STATE_CHECKBOX = {
  counter: 10,
};

const timerReducer = (state = INITIAL_STATE_CHECKBOX, action) => {
  switch (action.type) {
    case RESET_TIMER:
      return {
        ...state,
        counter: action.counter,
      };
    case ADD_COUNTER:
      return {
        ...state,
        counter: state.counter - action.counter,
      };
    default:
      return state;
  }
};

export default timerReducer;
