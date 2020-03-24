export const ADD_MARKED_ANSWER = 'ADD_MARKED_ANSWER';

const receiveMarkedAnswer = (markedAnswer) => ({
  type: ADD_MARKED_ANSWER,
  markedAnswer,
});

export const addMarkedAnswer = (markedAnswer) => (
  (dispatch) => dispatch(receiveMarkedAnswer(markedAnswer))
);
