export const ADD_QUESTION_RESULTS = 'ADD_QUESTION_RESULTS';
export const ADD_SCORE = 'ADD_SCORE';
export const ADD_QUESTION_NUMBER = 'ADD_QUESTION_NUMBER';

const receiveQuestions = (questions) => ({
  type: ADD_QUESTION_RESULTS,
  questions,
});

const receiveScore = (score) => ({
  type: ADD_SCORE,
  score,
});

const receiveQuestionNumber = (questionNumber) => ({
  type: ADD_QUESTION_NUMBER,
  questionNumber,
});

export const addQuestions = (questions) => {
  return (dispatch) => dispatch(receiveQuestions(questions));
}

export const addScore = (score) => {
  return (dispatch) => dispatch(receiveScore(score));
}

export const addQuestionNumber = (questionNumber) => {
  return (dispatch) => dispatch(receiveQuestionNumber(questionNumber));
}