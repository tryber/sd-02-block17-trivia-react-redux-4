import {
  CATEGORY,
  DIFFICULTY,
  TYPE,
} from '../actions/dropdown';

const INITIAL_STATE_CHECKBOX = {
  difficulty: '',
  category: 0,
  type: '',
};

const dropdownReducer = (state = INITIAL_STATE_CHECKBOX, action) => {
  switch (action.type) {
    case CATEGORY:
      return {
        ...state,
        category: action.selected,
      };
    case DIFFICULTY:
      return {
        ...state,
        difficulty: action.selected,
      };
    case TYPE:
      return {
        ...state,
        type: action.selected,
      };
    default:
      return state;
  }
};

export default dropdownReducer;
