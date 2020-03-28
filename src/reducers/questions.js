import {
  ADD_QUESTION_RESULTS,
  ADD_SCORE,
  ADD_QUESTION_NUMBER,
  ADD_NAME_EMAIL,
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
      return {
        ...state,
        questionNumber: state.questionNumber + action.questionNumber,
        classCorrect: action.classCorrect,
        classIncorrect: action.classIncorrect,
      };
    }
    case ADD_NAME_EMAIL:
      return {
        ...state,
        player: {
          ...state.player,
          name: action.name,
          gravatarEmail: action.email,
        },
      };
    default:
      return state;
  }
};

export default questionReducer;
