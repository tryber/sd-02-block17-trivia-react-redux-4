export const CATEGORYS = 'CATEGORYS';

const receiveCategorys = (categorys) => ({
  type: CATEGORYS,
  categorys,
});

export const addCategorys = (categorys) => (
  (dispatch) => dispatch(receiveCategorys(categorys))
);
