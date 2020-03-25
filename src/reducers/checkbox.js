import {
  ADD_MARKED_ANSWER,
  SELECTED,
} from '../actions/checkbox';

const INITIAL_STATE_CHECKBOX = {
  markedAnswer: '',
  selected: false,
};

const checkboxReducer = (state = INITIAL_STATE_CHECKBOX, action) => {
  switch (action.type) {
    case ADD_MARKED_ANSWER:
      return {
        ...state,
        markedAnswer: action.markedAnswer,
      };
    case SELECTED:
      return {
        ...state,
        selected: action.selected,
      };
    default:
      return state;
  }
};

export default checkboxReducer;
