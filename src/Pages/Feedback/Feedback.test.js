import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import store from '../../store';
import Feedback from './index';
// import { addScore } from '../../actions/questions';


// test('Test action addScore', () => {
//   const score = 1;
//   const questionCorrect = 1;

//   expect(addScore(score, questionCorrect)).toEqual({
//     type: 'ADD_SCORE',
//     score: 1,
//     assertions: 1,
//   });
// });
describe('Page Feedback', () => {
  test('Componenets render', () => {
    const history = createMemoryHistory();

    const { getByTestId } = render(
      <Provider store={store}>
        <Feedback history={history} />
      </Provider>,
    );

    expect(getByTestId('feedback-total-question')
      .innerHTML).toBe('Você acertou 0 questões');
    expect(getByTestId('feedback-total-score')
      .innerHTML).toBe('Um total de 0 pontos');
    expect(getByTestId('header-score')
      .innerHTML).toBe('Pontos: 0');
    expect(getByTestId('feedback-text')
      .innerHTML).toBe('Podia ser melhor...');
  });
});
