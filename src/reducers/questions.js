import {
  ADD_QUESTION_RESULTS,
  ADD_SCORE,
  ADD_QUESTION_NUMBER,
} from '../actions/questions';
import data from '../Pages/Game/questionsMock';


const INITIAL_STATE_QUESTION = {
  questionsResults: data,
  score: 0,
  questionNumber: 0,
};

const questionReducer = (state = INITIAL_STATE_QUESTION, action) => {
  switch (action.type) {
    case ADD_QUESTION_RESULTS:
      return {
        ...state,
        questionsResults: action.questions,
      };
    case ADD_SCORE:
      return {
        ...state,
        score: state.score + action.score,
      };
    case ADD_QUESTION_NUMBER: {
      return {
        ...state,
        questionNumber: state.questionNumber + action.questionNumber,
      };
    }
    default:
      return state;
  }
};

export default questionReducer;
