import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Ranking from './index';

afterEach(cleanup);

it('Com a URL em /game-ranking deve ser renderizada a página de Ranking', () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/game-ranking']}>
      <Ranking />
    </MemoryRouter>,
  );

  expect(getByText('Ranking')).toBeInTheDocument();
});

it('O título da página deve estar presente na página', () => {
  const { getByText } = render(
    <MemoryRouter>
      <Ranking />
    </MemoryRouter>,
  );
  const pageTitle = getByText('Ranking');

  expect(pageTitle).toBeInTheDocument();
  expect(pageTitle.tagName).toBe('H3');
});
