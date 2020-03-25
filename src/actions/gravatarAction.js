export const GET_GRAVATAR = 'GET_GRAVATAR';
export const GET_GRAVATAR_SUCCESS = 'GET_GRAVATAR_SUCCESS';
export const GET_GRAVATAR_FAILURE = 'GET_GRAVATAR_FAILURE';

export const getGravatarAction = (hash) => (
  { type: GET_GRAVATAR, loading: true, hash }
);
export const getGravatarSuccess = (email) => (
  { type: GET_GRAVATAR_SUCCESS, email }
);
export const getGravatarFailure = (error) => (
  { type: GET_GRAVATAR_FAILURE, error }
);

export function catchEmail(email) {
  return (dispatch) => {
    dispatch(getGravatarSuccess(email));
  };
}
