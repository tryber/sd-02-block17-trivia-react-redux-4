import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {
  render, fireEvent, cleanup, wait,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import rootReducer from '../../reducers';
import questionMock from './questionsMock';
import Game from './index';

const difficulty = {
  hard: 3,
  medium: 2,
  easy: 1,
};

const gameInitialState = {
  gravatarReducer: {
    email: '',
  },
  questionReducer: {
    questionNumber: 0,
    player: {
      name: 'Julio',
      score: 0,
    },
  },
  apiReducer: {
    questions: questionMock,
    loading: false,
  },
  timerReducer: {
    interval: '',
    seconds: 30,
  },
  checkboxReducer: {
    correct: '',
    incorrect: '',
    canNextQuestion: false,
  },
  setLoadingTrue: jest.fn(),
  startTick: jest.fn(),
  stopTimer: jest.fn(),
  getStartTime: jest.fn(),
  setStateInterval: jest.fn(),
  setQuestionNumber: jest.fn(),
  setClassButton: jest.fn('correct-answer', 'incorrect-answer', true),
};

const { apiReducer: {
  questions,
},
} = gameInitialState;

const { category, question } = questions.results[2];

console.log(category);

const onLoading = {
  ...gameInitialState,
  apiReducer: {
    ...gameInitialState.apiReducer,
    loading: true,
  },
};

function renderWithRedux(
  component,
  { initialState, store = createStore(rootReducer, initialState, applyMiddleware(thunk)) } = {},
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

describe('testing game page', () => {
  test('game header with onLoading', () => {
    const { getByAltText, getByTestId, getByText } = renderWithRedux(<Game />,
      { initialState: onLoading });

    const loading = getByText(/loading/i);

    expect(loading).toBeInTheDocument();

    const playerName = getByTestId(/header-player-name/i);
    const playerImage = getByAltText(/Gravatar/i);
    const playerScore = getByTestId(/header-score/i);

    expect(playerName).toBeInTheDocument();
    expect(playerName.innerHTML).toBe('Jogador:Julio');

    expect(playerImage).toBeInTheDocument();
    expect(playerImage.tagName).toBe('IMG');
    expect(playerImage.src).toBe(`https://www.gravatar.com/avatar/${gameInitialState.gravatarReducer.email}`);

    expect(playerScore).toBeInTheDocument();
    expect(playerScore.innerHTML).toBe('Pontos:0');
  });
  test('game questions after Loading', async () => {
    const { store, getByTestId, getAllByTestId, getByText } = renderWithRedux(<Game />,
      { initialState: gameInitialState });

    const {
      category,
      question,
      correct_answer,
      incorrect_answers,
      difficulty: level,
    } = questionMock.results[0];

    const timer = getByTestId(/timer/i);

    expect(timer).toBeInTheDocument();
    expect(timer.innerHTML).toEqual('Counter:30');

    const questionCategory = getByTestId(/question-category/i);
    const questionText = getByTestId(/question-text/i);

    expect(questionCategory).toBeInTheDocument();
    expect(questionCategory.innerHTML).toBe(category);

    expect(questionText).toBeInTheDocument();
    expect(questionText.innerHTML).toBe(question);

    let correctAnswer = getByTestId(/correct-answer/i);
    let incorrectAnswers = getAllByTestId(/wrong-answer/i);

    expect(correctAnswer).toBeInTheDocument();
    expect(correctAnswer.innerHTML).toBe(correct_answer);

    incorrectAnswers.forEach((incorrect) => {
      expect(incorrect).toBeInTheDocument();
      const existAnswer = incorrect_answers.filter((element) => element === incorrect.innerHTML);
      expect(existAnswer).toBeTruthy();
    });

    fireEvent.click(correctAnswer);

    const playerScore = getByTestId(/header-score/i);
    const { timerReducer: { seconds } } = gameInitialState;

    expect(playerScore.innerHTML).toBe(`Pontos:${10 + (seconds * difficulty[level])}`);

    const nextButton = getByText(/Próximo/i);
    expect(nextButton).toBeInTheDocument();

    fireEvent.click(nextButton);
    //console.log(store.getState().apiReducer.questions.results[store.getState().questionReducer.questionNumber]);
    await wait(() => {
      expect(getByText(/Homo Ergaster/i)).toBeInTheDocument();
    });


    //   test('click o correct answer', () => {
    //     const { getByTestId, getAllByTestId } = renderWithRedux(<Game />,
    //       { initialState: clickOnCorrectAnswer });
    //     // expect().toBeInTheDocument();
    //     // expect().toBe();

    //     // expect().toBeInTheDocument();
    //     // expect().toBe();

    //     // expect().toBeInTheDocument();
    //     // expect().toBe();
    //   });
  });
});
