export const RESET_TIMER = 'RESET_TIMER';
export const ADD_COUNTER = 'ADD_COUNTER';

const receiveReset = (counter) => ({
  type: RESET_TIMER,
  counter,
});

const receiveAddCounter = (counter) => ({
  type: ADD_COUNTER,
  counter,
});

export const addCounter = (counter) => (
  (dispatch) => dispatch(receiveAddCounter(counter))
);

export const addReset = () => (
  (dispatch) => dispatch(receiveReset(10))
);
