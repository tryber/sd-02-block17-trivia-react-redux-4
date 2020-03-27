export const ADD_QUESTION_RESULTS = 'ADD_QUESTION_RESULTS';
export const ADD_SCORE = 'ADD_SCORE';
export const ADD_QUESTION_NUMBER = 'ADD_QUESTION_NUMBER';
export const ADD_QUESTION_CORRECT = 'ADD_QUESTION_CORRECT';
export const ADD_NAME_EMAIL = 'ADD_NAME_EMAIL';

const receiveQuestions = (questions) => ({
  type: ADD_QUESTION_RESULTS,
  questions,
});

const receiveScore = (score, questionCorrect) => ({
  type: ADD_SCORE,
  score,
  questionCorrect,
});

const receiveQuestionNumber = (questionNumber) => ({
  type: ADD_QUESTION_NUMBER,
  questionNumber,
});

const receiveNameAndEmail = (name, email) => ({
  type: ADD_NAME_EMAIL,
  name,
  email,
});

export const addQuestions = (questions) => (
  (dispatch) => dispatch(receiveQuestions(questions))
);

export const addScore = (score, questionCorrect) => (
  (dispatch) => dispatch(receiveScore(score, questionCorrect))
);

export const addQuestionNumber = () => (
  (dispatch) => dispatch(receiveQuestionNumber(1))
);

export const addNameAndEmail = (name, email) => (
  (dispatch) => dispatch(receiveNameAndEmail(name, email))
);
