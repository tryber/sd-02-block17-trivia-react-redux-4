export const CATEGORY = 'CATEGORY';
export const DIFFICULTY = 'DIFFICULTY';
export const TYPE = 'TYPE';

const receiveSelected = (type, selected) => ({
  type,
  selected,
});

export const addSelected = (type, selected) => (
  (dispatch) => dispatch(receiveSelected(type, selected))
);
