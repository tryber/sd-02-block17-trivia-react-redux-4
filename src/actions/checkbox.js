export const ADD_CLASS_BUTTON = 'ADD_CLASS_BUTTON';

const receiveAddClassButton = (correct, incorrect, canNextQuestion) => ({
  type: ADD_CLASS_BUTTON,
  correct,
  incorrect,
  canNextQuestion,
});

export const addClassButton = (correct, incorrect, canNextQuestion) => (
  (dispatch) => dispatch(receiveAddClassButton(correct, incorrect, canNextQuestion))
);
