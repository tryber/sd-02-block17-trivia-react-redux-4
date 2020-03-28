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
    };
  }

  shuffle(array) {
    const newArray = array;
    for (let i = newArray.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    this.setState({ newArray, canShuffle: false });
  }

  async handleClickButton(e, level) {
    const {
      setClassButton, setScore, interval, stopTimer, seconds,
    } = this.props;
    const { difficulty } = this.state;
    if (e) {
      setScore(10 + (seconds * difficulty[level]), 1);
    }
    stopTimer();
    clearInterval(interval);
    await setClassButton('correct-answer', 'incorrect-answer', true);
    this.setState({ canShuffle: true });
  }

  renderNextButton(newArray, difficulty, correctAnswer) {
    const { correct, incorrect } = this.props;
    return (
      newArray.map((answer) => {
        if (answer === correctAnswer) {
          return (
            <button
              onClick={(e) => this.handleClickButton(e, difficulty)}
              type="button"
              className={`answer-content ${correct}`}
              key={answer}
            >
              {answer}
            </button>
          );
        }
        return (
          <button
            onClick={() => this.handleClickButton()}
            type="button"
            className={`answer-content ${incorrect}`}
            key={answer}
          >
            {answer}
          </button>
        );
      })
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
