import { FILLED_INPUTS } from '../actions/Campo';

const INITIAL_STATE = {
  name: '',
  email: '',
  disabled: true,
}

const loginInputs = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILLED_INPUTS:
      return {
        ...state,
        disabled: action.disabled,
      }
    default:
      return state;
  }
}

export default loginInputs;
