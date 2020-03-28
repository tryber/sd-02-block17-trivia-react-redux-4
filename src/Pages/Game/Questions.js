import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Timer from './Timer';
import Checkbox from './Checkbox';
import './Questions.css';

import { addQuestionNumber } from '../../actions/questions';
import { addClassButton } from '../../actions/checkbox';
import {
  setAddInterval, addStartTimer, addTick, setStopTimer,
} from '../../actions/timer';


class Questions extends Component {
  constructor(props) {
    super(props);
    this.startTimer = this.startTimer.bind(this);
    this.tick = this.tick.bind(this);
  }

  tick(startTick, stopTimer, setClassButton) {
    const { seconds } = this.props;
    startTick();
    if (seconds <= 1) {
      stopTimer();
      clearInterval(this.interval);
      setClassButton('correct-answer', 'incorrect-answer', true);
    }
  }

  startTimer() {
    const {
      startTick, stopTimer, setClassButton, setStateInterval,
    } = this.props;
    this.interval = setInterval(() => (
      this.tick(startTick, stopTimer, setClassButton)
    ), 1000);
    setStateInterval(this.interval);
  }

  handleClickButton() {
    const { setQuestionNumber, setClassButton, getStartTime } = this.props;
    getStartTime();
    setQuestionNumber();
    setClassButton('', '', false);
    this.startTimer();
  }

  QuestionBox() {
    const { questions, questionNumber } = this.props;
    const { category, question } = questions.results[questionNumber];
    return (
      <div className="question-content">
        <div data-testid="question-category" className="question-header">{category}</div>
        <div className="question-body">{question}</div>
      </div>
    );
  }

  AnswerBox() {
    const { canNextQuestion } = this.props;
    return (
      <div className="answers-content">
        <Checkbox />
        {(canNextQuestion)
          ? (
            <button
              onClick={() => this.handleClickButton()}
              className="next-button"
              type="button"
            >
              Próximo
            </button>
          )
          : null}
      </div>
    );
  }

  render() {
    const { questions, questionNumber } = this.props;
    const { player } = this.props;
    if (questions.response_code === 3) return <div>Pagina Inicial</div>;
    if (questionNumber > 4) {
      const obj = {
        player,
      };
      localStorage.setItem('state', JSON.stringify(obj));
      return <Redirect to="feedback" />;
    }
    return (
      <div className="game-container">
        {this.QuestionBox()}
        <Timer />
        {this.AnswerBox()}
      </div>
    );
  }
}

const mapStateToProps = ({
  timerReducer: {
    seconds,
  },
  checkboxReducer: {
    canNextQuestion,
  },
  questionReducer: {
    questionNumber,
    player,
  },
  apiReducer: {
    questions,
  },
}) => ({
  seconds,
  canNextQuestion,
  questionNumber,
  player,
  questions,
});

const mapDispatchToProps = (dispatch) => ({
  startTick: () => dispatch(addTick()),
  stopTimer: () => dispatch(setStopTimer()),
  getStartTime: () => dispatch(addStartTimer()),
  setStateInterval: (interval) => dispatch(setAddInterval(interval)),
  setQuestionNumber: () => dispatch(addQuestionNumber()),
  setClassButton: (correct, incorrect, nextButton) => (
    dispatch(addClassButton(correct, incorrect, nextButton))
  ),
});

Questions.propTypes = {
  seconds: propTypes.number,
  canNextQuestion: propTypes.bool,
  questionNumber: propTypes.number,
  questions: propTypes.instanceOf(Array),
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
