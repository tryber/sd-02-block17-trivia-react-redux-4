import { } from '../actions/LoginPage';

const INITIAL_STATE = {

}

const loginInputs = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case xxx:
      return {
        ...state,
        xxx,
      }
    default:
      return state;
  }
}

export default loginInputs;
