export const FILLED_INPUTS = 'FILLED_INPUTS';

const fullInputs = (disabled) => ({
  type: FILLED_INPUTS,
  disabled,
});

export const allInputsIn = (disabled) => {
  return (dispatch) => {
    dispatch(fullInputs(disabled))
  }
};
