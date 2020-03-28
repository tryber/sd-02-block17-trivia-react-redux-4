import {
  CATEGORYS,
} from '../actions/categorysAPI';

const INITIAL_STATE_CHECKBOX = {
  categorys: [],
};

const categorysAPIReducer = (state = INITIAL_STATE_CHECKBOX, action) => {
  if (action.type === CATEGORYS) {
    const categorys = [...action.categorys];
    return {
      ...state,
      categorys,
    };
  }
  return state;
};

export default categorysAPIReducer;
