import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import store from '../../store';
import Feedback from './index';

afterEach(() => {
  window.localStorage.removeItem('state');
  cleanup();
});

beforeEach(() => {
  const obj = {
    player: {
      name: '',
      assertions: 0,
      score: 0,
      gravatarEmail: '',
    },
  };
  window.localStorage.setItem('state', JSON.stringify(obj));
});

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

  test('redirect to "/ranking"', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Provider store={store}>
        <Feedback history={history} />
      </Provider>,
    );

    fireEvent.click(getByText('Ver Ranking'));
    expect(history.location.pathname).toBe('/ranking');
  });

  test('redirect to "/game"', () => {
    const history = createMemoryHistory();
    const { getByText } = render(
      <Provider store={store}>
        <Feedback history={history} />
      </Provider>,
    );

    fireEvent.click(getByText('Jogar Novamente'));
    expect(history.location.pathname).toBe('/game');
  });
});
