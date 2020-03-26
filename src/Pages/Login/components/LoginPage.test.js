import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import LoginPage from './LoginPage';

afterEach(cleanup);

describe('Todos componentes criados devem estar presentes na página', () => {
  it('A imagem deve estar presente na página', () => {
    const { getByAltText } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );
    const triviaLogo = getByAltText('TriviaLogo');
    
    expect(triviaLogo).toBeInTheDocument();
    expect(triviaLogo.tagName).toBe('IMG');
  });
});