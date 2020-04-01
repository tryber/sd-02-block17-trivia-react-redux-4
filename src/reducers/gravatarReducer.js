import { GET_GRAVATAR, GET_GRAVATAR_SUCCESS, GET_GRAVATAR_FAILURE } from '../actions/gravatarAction';

const initialState = {
  email: '',
  token: '',
};

const localStorageAdmin = (param) => {
  if (localStorage.getItem(`${param}`) === null) {
    localStorage.setItem('ranking', JSON.stringify(param));
  }
  localStorage.getItem(`${param}`);
};

const gravatarReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GRAVATAR:
      return {
        ...state,
        fetching: true,
      };
    case GET_GRAVATAR_SUCCESS:
      localStorageAdmin(action.email, action.token);
      return {
        ...state,
        fetching: false,
        email: action.email,
        token: action.token,
      };
    case GET_GRAVATAR_FAILURE:
      return {
        ...state,
        error: action.error,
        fetching: false,
      };
    default: return state;
  }
};

export default gravatarReducer;
