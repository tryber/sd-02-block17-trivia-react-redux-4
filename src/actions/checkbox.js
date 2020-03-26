export const ADD_MARKED_ANSWER = 'ADD_MARKED_ANSWER';
export const SELECTED = 'SELECTED';

const receiveMarkedAnswer = (markedAnswer) => ({
  type: ADD_MARKED_ANSWER,
  markedAnswer,
});

const receiveSelected = (selected) => ({
  type: SELECTED,
  selected,
});

export const addMarkedAnswer = (markedAnswer) => (
  (dispatch) => dispatch(receiveMarkedAnswer(markedAnswer))
);

export const addSelected = (selected) => (
  (dispatch) => dispatch(receiveSelected(selected))
);
