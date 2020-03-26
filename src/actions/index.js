import generateToken from '../Services/triviaAPI';

export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_FAILURE = 'GET_QUESTIONS_FAILURE';

export const getQuestionsAction = () => (
  { type: GET_QUESTIONS, loading: true }
);
export const getQuestionsSuccess = (data) => (
  { type: GET_QUESTIONS_SUCCESS, questions: data.results }
);
export const getQuestionsFailure = (error) => (
  { type: GET_QUESTIONS_FAILURE, error }
);

export function thunkQuestions() {
  return (dispatch) => {
    dispatch(getQuestionsAction());
    return generateToken()
      .then(
        (question) => dispatch(getQuestionsSuccess(question)),
        (error) => dispatch(getQuestionsFailure(error.message)),
      );
  };
}
