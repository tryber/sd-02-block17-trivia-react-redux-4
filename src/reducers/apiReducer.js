import { GET_QUESTIONS, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_FAILURE, GET_TOKEN, GET_TOKEN_SUCCESS, GET_TOKEN_FAILURE } from '../actions';

const initialQuestions = {
  questions: [],
  loading: true,
};

const initialToken = {
  loading: true,
  token: '',
}

export const apiReducer = (state = initialQuestions, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        loading: action.loading,
      };
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        loading: action.loading,
        questions: action.questions,
      };
    case GET_QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: action.loading,
      };
    default: return state;
  }
};

export const tokenReducer = (state = initialToken, action) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        loading: true,
      };
    case GET_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: action.token,
      };
    case GET_TOKEN_FAILURE:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default: return state;
  }
}
