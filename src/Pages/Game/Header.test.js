import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';


const headerInitialState = {
  gravatarReducer: {
    email: '',
  },
  questionReducer: {
    player: {
      name: 'Julio',
      score: 0,
    },
  },
};

const reducer = (state = headerInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

function renderWithRedux(
  component,
  { initialState, store = createStore(reducer, initialState, applyMiddleware(thunk)) } = {},
) {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
}

afterEach(cleanup);

describe('testing game page header', () => {
  test('rendering component header', () => {
    const { getByAltText, getByTestId } = renderWithRedux(<Header />, { headerInitialState });

    const playerName = getByTestId(/header-player-name/i);
    const playerImage = getByAltText(/Gravatar/i);
    const playerScore = getByTestId(/header-score/i);

    expect(playerName).toBeInTheDocument();
    expect(playerName.innerHTML).toBe('Jogador:Julio');

    expect(playerImage).toBeInTheDocument();
    expect(playerImage.tagName).toBe('IMG');
    expect(playerImage.src).toBe(`https://www.gravatar.com/avatar/${headerInitialState.gravatarReducer.email}`);

    expect(playerScore).toBeInTheDocument();
    expect(playerScore.innerHTML).toBe('Pontos:0');
  });
});
