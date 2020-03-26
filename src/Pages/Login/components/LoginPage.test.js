import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createMemoryHistory } from 'history';
import LoginPage from './LoginPage';

afterEach(cleanup);

it('A logo do jogo deve estar presente na página', () => {
  
  const { getByAltText } = render(
    <MemoryRouter>
      <LoginPage />
    </MemoryRouter>,
  );
  const triviaLogo = getByAltText('TriviaLogo');

  expect(triviaLogo).toBeInTheDocument();
  expect(triviaLogo.tagName).toBe('IMG');
});

describe('Testes relacionados aos inputs da página de login', () => {
  it('O input de e-mail deve estar presente e deve ser inicializado vazio', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );
    const emailInput = getByTestId('input-gravatar-email');
    expect(emailInput).toBeInTheDocument;
    expect(emailInput.tagName).toEqual('INPUT');
    expect(emailInput.innerHTML).toBe('');
  });

  it('O input de nome do usuário deve estar presente e deve ser inicializado vazio', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );
    const usernameInput = getByTestId('input-player-name');

    expect(usernameInput).toBeInTheDocument;
    expect(usernameInput.tagName).toEqual('INPUT');
    expect(usernameInput.innerHTML).toBe('');
  });
});

describe('Testes relacionados ao botão JOGAR! da página da página de login', () => {
  it('O botão deve estar presente na página, ter o texto JOGAR! e ter a tagname BUTTON', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );
    const jogarButton = getByTestId('btn-play');

    expect(jogarButton).toBeInTheDocument;
    expect(jogarButton.tagName).toEqual('BUTTON');
    expect(jogarButton).toHaveTextContent('JOGAR!');
  });

  it('O botão deve se encontrar desabilitado ao iniciar a página, pois os inputs estarão vazios', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );
    const jogarButton = getByTestId('btn-play');

    expect(jogarButton).toBeInTheDocument();
    expect(jogarButton).toHaveAttribute('disabled');
  });

  it('O botão JOGAR! o ser clicado deve direcionar à página de jogo', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );
    const jogarButton = getByTestId('btn-play');
    const history = createMemoryHistory();

    fireEvent.click(jogarButton);
    expect(history.location.pathname).toBe('/game-page');
  });
});

describe('Testes relacionados ao botão de configurações da página da página de login', () => {
  it('O botão de configurações deve estar presente na tela e ser um icon', () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );
    const settingsButton = getByTestId('config-button');

    expect(settingsButton).toBeInTheDocument;
    expect(settingsButton.tagName).toEqual('I');
  });

  it('O botão de configurações deve direcionar para a página de configurações ao ser clicado', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>,
    );
    const settingsButton = getByTestId('config-button');

    fireEvent.click(settingsButton);
    expect(history.location.pathname).toBe('/settings');
  });
});