import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

import store from '../../store';
import Configuracao from './index';

const difficulty = [
  'easy',
  'medium',
  'hard',
];

const types = [
  'Multiple Choice',
  'True / False',
];

jest.mock('node-fetch');

describe('Page Configuracao', () => {
  test('Renderização inicial', () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Configuracao />
      </Provider>,
    );

    expect(getByText('Categoria:')).toBeInTheDocument();
    expect(getByText('Dificuldade:')).toBeInTheDocument();
    expect(getByText('Tipo:')).toBeInTheDocument();
    expect(getByTestId('question-category-dropdown')).toBeInTheDocument();
    expect(getByTestId('question-difficulty-dropdown')).toBeInTheDocument();
    expect(getByTestId('question-type-dropdown')).toBeInTheDocument();

    const list = getByTestId('question-type-dropdown').querySelector('.list');
    const btns = list.querySelectorAll('button');
    for (let i = 0; i < btns.length; i += 1) {
      const bool = types.some((item) => item === btns[i].innerHTML);
      expect(bool).toBe(true);
    }

    const list2 = getByTestId('question-difficulty-dropdown').querySelector('.list');
    const btns2 = list2.querySelectorAll('button');
    for (let i = 0; i < btns2.length; i += 1) {
      const bool = difficulty.some((item) => item === btns2[i].innerHTML);
      expect(bool).toBe(true);
    }
  });
});
