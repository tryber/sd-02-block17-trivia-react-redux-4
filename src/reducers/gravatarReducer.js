import { GET_GRAVATAR, GET_GRAVATAR_SUCCESS, GET_GRAVATAR_FAILURE } from '../actions/gravatarAction';

const initialState = {
  gravatar: '',
  email: '',
};

const gravatarReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_GRAVATAR:
      return {
        ...state,
        fetching: true,
      };
    case GET_GRAVATAR_SUCCESS:
      return {
        ...state,
        fetching: false,
        gravatar: action.gravatar,
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
