export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const TICK = 'TICK';
export const SET_INTERVAL = 'SET_INTERVAL';

const receiveStartTimer = (startTime) => ({
  type: START_TIMER,
  startTime,
});

const receiveTick = () => ({
  type: TICK,
});

const receiveStopTimer = () => ({
  type: STOP_TIMER,
});

const receiveInterval = (interval) => ({
  type: SET_INTERVAL,
  interval,
});

export const addStartTimer = () => (
  (dispatch) => dispatch(receiveStartTimer(30))
);

export const addTick = () => (
  (dispatch) => dispatch(receiveTick())
);

export const setStopTimer = () => (
  (dispatch) => dispatch(receiveStopTimer())
);

export const setAddInterval = (interval) => (
  (dispatch) => dispatch(receiveInterval(interval))
);
