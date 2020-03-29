import {
  ADD_QUESTION_RESULTS,
  ADD_SCORE,
  ADD_QUESTION_NUMBER,
  ADD_NAME_EMAIL,
  RESET_QUESTION_REDUCER,
} from '../actions/questions';
import data from '../Pages/Game/questionsMock';


const INITIAL_STATE_QUESTION = {
  questionsResults: data,
  player: {
    name: '',
    assertions: 0,
    score: 0,
    gravatarEmail: '',
  },
  questionNumber: 0,
};

const getScore = (state, action) => (
  {
    ...state,
    player: {
      ...state.player,
      score: state.player.score + action.score,
      assertions: state.player.assertions + action.questionCorrect,
    },
  }
);

const getAddNameEmail = (state, action) => (
  {
    ...state,
    player: {
      ...state.player,
      name: action.name,
      gravatarEmail: action.email,
    },
  }
);

const getAddQuestionNumber = (state, action) => (
  {
    ...state,
    questionNumber: state.questionNumber + action.questionNumber,
    classCorrect: action.classCorrect,
    classIncorrect: action.classIncorrect,
  }
);

const getResetQuestionReducer = (state, action) => (
  {
    ...state,
    player: {
      ...action.player,
      name: state.player.name,
      gravatarEmail: state.player.gravatarEmail,
    },
    questionNumber: action.questionNumber,
  }
);

const questionReducer = (state = INITIAL_STATE_QUESTION, action) => {
  switch (action.type) {
    case ADD_QUESTION_RESULTS:
      return {
        ...state,
        questionsResults: action.questions,
      };
    case ADD_SCORE:
      return getScore(state, action);
    case ADD_QUESTION_NUMBER: {
      return getAddQuestionNumber(state, action);
    }
    case ADD_NAME_EMAIL:
      return getAddNameEmail(state, action);
    case RESET_QUESTION_REDUCER:
      return getResetQuestionReducer(state, action);
    default:
      return state;
  }
};

export default questionReducer;
