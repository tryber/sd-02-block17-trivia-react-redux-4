import { GET_GRAVATAR, GET_GRAVATAR_SUCCESS, GET_GRAVATAR_FAILURE } from '../actions/gravatarAction';

const initialState = {
  nome: '',
  email: '',
};

const localStorageAdmin = (param) => {
  if (localStorage.getItem(`${param}`) === null) {
    localStorage.setItem('player', JSON.stringify(param));
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
      localStorageAdmin(action.email);
      return {
        ...state,
        fetching: false,
        name: action.name,
        email: action.email,
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
