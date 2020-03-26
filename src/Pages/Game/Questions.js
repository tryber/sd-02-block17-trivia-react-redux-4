import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {
  addQuestions, addQuestionNumber, addScore, addQuestionCorrect,
} from '../../actions/questions';
import { addSelected } from '../../actions/checkbox';
import { addReset, addCounter } from '../../actions/timer';

import Timer from './Timer';
import Checkbox from './Checkbox';
import './Questions.css';


function difficultyScore(difficulty) {
  switch (difficulty) {
    case 'hard':
      return 3;
    case 'medium':
      return 2;
    case 'easy':
      return 1;
    default:
      return 0;
  }
}

class Questions extends Component {
  constructor(props) {
    super(props);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  componentDidUpdate() {
    const { counter } = this.props;
    if (counter === 0) {
      this.isSelected();
    }
  }

  nextQuestion() {
    const {
      selected,
    } = this.props;

    if (selected) {
      this.isSelected();
    }
  }

  isSelected() {
    const {
      markedAnswer,
      questionNumber,
      questionsResults,
      getQuestionsNumber,
      getQuestionCorrect,
      getSelected,
      getReset,
      getScore,
      history,
      counter,
    } = this.props;

    const { results } = questionsResults[questionNumber];
    if (markedAnswer === results[0].correct_answer) {
      getQuestionCorrect(1);
      getQuestionsNumber(1);
      getScore(10 + (counter * difficultyScore(results[0].difficulty)));
    } else {
      getQuestionsNumber(1);
    }
    if (questionNumber >= 4) {
      history.push('/game-feedback');
    }
    getSelected(false);
    getReset();
  }

  render() {
    const {
      questionNumber, questionsResults,
    } = this.props;
    const { results } = questionsResults[questionNumber];
    return (
      <div className="game-container">
        <div className="question-content">
          <div className="question-header">
            <Timer />
            <h2 className="category">{results[0].category}</h2>
          </div>
          <div className="question-body">
            <h3 className="question">{results[0].question}</h3>
          </div>
        </div>
        <div className="answers-content">
          <Checkbox questionNumber={questionNumber} />
          <div className="next-button-content">
            <button
              className="next-button"
              type="button"
              onClick={({ target }) => this.nextQuestion(target)}
            >
              Proxima
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({
  timerReducer: {
    counter,
  },
  checkboxReducer: {
    markedAnswer,
    selected,
  },
  questionReducer: {
    questionsResults,
    score,
    questionNumber,
    correct,
  },
}) => ({
  markedAnswer,
  questionsResults,
  score,
  questionNumber,
  correct,
  selected,
  counter,
});

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (data) => dispatch(addQuestions(data)),
  getScore: (score) => dispatch(addScore(score)),
  getQuestionsNumber: (questionNumber) => dispatch(addQuestionNumber(questionNumber)),
  getQuestionCorrect: (questionCorrect) => dispatch(addQuestionCorrect(questionCorrect)),
  getSelected: (selected) => dispatch(addSelected(selected)),
  getReset: () => dispatch(addReset()),
  getAddCounter: (counter) => dispatch(addCounter(counter)),
});

Questions.propTypes = {
  markedAnswer: propTypes.string,
  questionResults: propTypes.instanceOf(Array),
  questionNumber: propTypes.number,
  score: propTypes.number,
  getScore: propTypes.func,
  getQuestionsNumber: propTypes.func,
  getQuestions: propTypes.func,
  getQuestionCorrect: propTypes.func,
  getSelected: propTypes.func,
  getReset: propTypes.func,
  getAddCounter: propTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
