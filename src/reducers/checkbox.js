import {
  ADD_MARKED_ANSWER,
} from '../actions/checkbox';

const INITIAL_STATE_CHECKBOX = {
  markedAnswer: '',
}

export const checkboxReducer = (state = INITIAL_STATE_CHECKBOX, action) => {
  switch (action.type) {
    case ADD_MARKED_ANSWER:
      return {
        ...state,
        markedAnswer: action.markedAnswer,
      }
    default:
      return state;
  }
}