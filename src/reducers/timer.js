import {
  START_TIMER, STOP_TIMER, TICK, SET_INTERVAL,
} from '../actions/timer';

const INITIAL_STATE_TIMER = {
  seconds: 0,
  startTime: 0,
  status: 'paused',
  interval: '',
};

const timerReducer = (state = INITIAL_STATE_TIMER, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        startTime: action.startTime,
        seconds: action.startTime,
        status: 'counting down',
      };
    case STOP_TIMER:
      return {
        ...state,
        status: 'paused',
      };
    case TICK:
      return {
        ...state,
        seconds: (state.seconds - 1),
      };
    case SET_INTERVAL:
      return {
        ...state,
        interval: action.interval,
      };
    default:
      return state;
  }
};

export default timerReducer;
