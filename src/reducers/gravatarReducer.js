import { GET_GRAVATAR, GET_GRAVATAR_SUCCESS, GET_GRAVATAR_FAILURE } from '../actions/gravatarAction';

const initialState = {
  nome: '',
  email: '',
};

const localStorageAdmin = (param) => {
  if (localStorage.getItem(`${param}`) === null) {
    localStorage.setItem(`${param}`, JSON.stringify(param));
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
      //INSERIR FUNÇÃO PRA COLOCAR EMAIL E NOME NO LOCALSTORAGE; SE EXISTE UM IGUAL, TRAZ. SE NÃO EXISTIR, PUSH PRO LOCALSTORAGE.
      //SUGESTÃO DE JULIO: localStorage.setItem(action.email, JSON.stringfy(action.email)) ;
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
