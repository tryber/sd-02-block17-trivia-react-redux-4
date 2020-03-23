import { GET_QUESTIONS, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_FAILURE } from '../Actions';

const initialState = {
  questions: [],
  fetching: true,
};

const apiReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        fetching: true,
      };
    case GET_QUESTIONS_SUCCESS:
      return {
        ...state,
        fetching: false,
        questions: action.questions,
      };
    case GET_QUESTIONS_FAILURE:
      return {
        ...state,
        error: action.error,
        fetching: false,
      };
    default: return state;
  }
};

export default apiReducer;
