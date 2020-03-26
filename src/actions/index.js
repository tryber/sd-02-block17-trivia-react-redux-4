import { generateToken, getQuestions } from '../Services/triviaAPI';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_FAILURE = 'GET_QUESTIONS_FAILURE';
export const GET_TOKEN = 'GET_TOKEN';
export const GET_TOKEN_SUCCESS = 'GET_TOKEN_SUCCESS';
export const GET_TOKEN_FAILURE = 'GET_TOKEN_FAILURE';

export const getQuestionsAction = (token) => (
  { type: GET_QUESTIONS, loading: true, token }
);
export const getQuestionsSuccess = (data) => (
  { type: GET_QUESTIONS_SUCCESS, questions: data.results, loading: false }
);
export const getQuestionsFailure = (error) => (
  { type: GET_QUESTIONS_FAILURE, error, loading: false }
);
export const getToken = () => (
  { type: GET_TOKEN, loading: true }
);
export const getTokenSuccess = (token) => (
  { type: GET_TOKEN_SUCCESS, token, loading: false }
);
export const getTokenFailure = (error) => (
  { type: GET_TOKEN_FAILURE, error, loading: false }
);

export function thunkQuestions(token) {
  return (dispatch) => {
    dispatch(getQuestionsAction(token));
    return getQuestions(token)
      .then(
        (data) => dispatch(getQuestionsSuccess(data)),
        (error) => dispatch(getQuestionsFailure(error.message)),
      );
  };
}

export function thunkToken() {
  return (dispatch) => {
    dispatch(getToken());
    return generateToken()
      .then(
        (data) => dispatch(getTokenSuccess(data)),
        (error) => dispatch(getTokenFailure(error.message)),
      );
  };
}
