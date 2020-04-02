import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { addClassButton } from '../../actions/checkbox';
import { addScore } from '../../actions/questions';
import { setStopTimer } from '../../actions/timer';
import './Checkbox.css';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newArray: [],
      canShuffle: true,
      difficulty: {
        hard: 3,
        medium: 2,
        easy: 1,
      },
      disabled: false,
      focusedAnswer: '',
    };
  }

  shuffle(array) {
    const newArray = array;
    for (let i = newArray.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    this.setState({ newArray, canShuffle: false, disabled: false });
  }

  async handleClickButton(e, canAddScore, level) {
    const {
      setClassButton, setScore, interval, stopTimer, seconds,
    } = this.props;
    const { difficulty } = this.state;
    if (canAddScore) {
      setScore(10 + (seconds * difficulty[level]), 1);
    }
    stopTimer();
    clearInterval(interval);
    this.setState({
      focusedAnswer: e.target.innerHTML,
    });
    await setClassButton('correct-answer', 'incorrect-answer', true);
    this.setState({
      canShuffle: true,
      disabled: true,
    });
  }

  nextButton(
    difficulty, correctAnswer, correct, incorrect, focusedAnswer, disabledButton, answer, index,
  ) {
    if (answer === correctAnswer) {
      return (
        <button
          onClick={(e) => this.handleClickButton(e, true, difficulty)}
          type="button"
          data-testid="correct-answer"
          disabled={disabledButton}
          className={(focusedAnswer === correctAnswer)
            ? 'answer-content focused-correct-answer'
            : `answer-content ${correct}`}
          key={answer}
        >
          {answer}
        </button>
      );
    }
    return (
      <button
        onClick={(e) => this.handleClickButton(e, false)}
        type="button"
        data-testid={`wrong-answer-${index}`}
        disabled={disabledButton}
        className={(focusedAnswer === answer)
          ? 'answer-content focused-incorrect-answer'
          : `answer-content ${incorrect}`}
        key={answer}
      >
        {answer}
      </button>
    );
  }

  renderNextButton(newArray, difficulty, correctAnswer) {
    const { correct, incorrect, seconds } = this.props;
    const { disabled, focusedAnswer } = this.state;
    let disabledButton = disabled;
    if (seconds <= 1) disabledButton = true;
    return (
      newArray.map((answer, index) => (
        this.nextButton(
          difficulty,
          correctAnswer,
          correct,
          incorrect,
          focusedAnswer,
          disabledButton,
          answer,
          index,
        )
      ))
    );
  }

  render() {
    const {
      questions, questionNumber, canNextQuestion,
    } = this.props;
    const { canShuffle, newArray } = this.state;
    const {
      correct_answer: correctAnswer, incorrect_answers: incorrectAnswer, difficulty,
    } = questions.results[questionNumber];
    if (!canNextQuestion && canShuffle) {
      this.shuffle([correctAnswer, ...incorrectAnswer]);
    }
    if (newArray.length > 0) {
      return this.renderNextButton(newArray, difficulty, correctAnswer);
    }
    return null;
  }
}


const mapDispatchToProps = (dispatch) => ({
  stopTimer: () => dispatch(setStopTimer()),
  setClassButton: (correct, incorrect, nextButton) => (
    dispatch(addClassButton(correct, incorrect, nextButton))
  ),
  setScore: (score, questionCorrect) => dispatch(addScore(score, questionCorrect)),
});

const mapStateToProps = ({
  timerReducer: {
    interval,
    seconds,
  },
  checkboxReducer: {
    correct,
    incorrect,
    canNextQuestion,
  },
  questionReducer: {
    questionNumber,
  },
  apiReducer: {
    questions,
  },
}) => ({
  interval,
  seconds,
  correct,
  incorrect,
  canNextQuestion,
  questionNumber,
  questions,
});

Checkbox.propTypes = {
  interval: propTypes.number,
  seconds: propTypes.number,
  correct: propTypes.string,
  incorrect: propTypes.string,
  canNextQuestion: propTypes.bool,
  questionNumber: propTypes.number,
  questions: propTypes.instanceOf(Array),
}.isRequired;


export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
