import {
  ADD_CLASS_BUTTON,
} from '../actions/checkbox';

const INITIAL_STATE_CHECKBOX = {
  correct: '',
  incorrect: '',
  canNextQuestion: false,
};

const checkboxReducer = (state = INITIAL_STATE_CHECKBOX, action) => {
  switch (action.type) {
    case ADD_CLASS_BUTTON:
      return {
        ...state,
        correct: action.correct,
        incorrect: action.incorrect,
        canNextQuestion: action.canNextQuestion,
      };
    default:
      return state;
  }
};

export default checkboxReducer;
