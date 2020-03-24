import React, { Component } from 'react';
import './Questions.css';
import Checkbox from './Checkbox';
import { connect } from 'react-redux';
import {
  addQuestions, addQuestionNumber, addScore
} from '../../actions/questions';

class Questions extends Component {
  constructor(props) {
    super(props);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  nextQuestion(target) {
    const {
      markedAnswer, questionNumber, questionsResults, getQuestionsNumber, getScore
    } = this.props;
    const { results } = questionsResults[questionNumber];
    if (questionNumber >= 4) {
      target.disabled = true;//history.push();
    } else if (markedAnswer === results[0].correct_answer) {
      getQuestionsNumber(1);
      getScore(10);
    } else {
      getQuestionsNumber(1);
    }
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
            <h2>{results[0].category}</h2>
          </div>
          <div className="question-body">
            <h3>{results[0].question}</h3>
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
  checkboxReducer: {
    markedAnswer,
  },
  questionReducer: {
    questionsResults,
    score,
    questionNumber,
  },
}) => ({
  markedAnswer,
  questionsResults,
  score,
  questionNumber,
})

const mapDispatchToProps = (dispatch) => ({
  getQuestions: (data) => dispatch(addQuestions(data)),
  getScore: (score) => dispatch(addScore(score)),
  getQuestionsNumber: (questionNumber) => dispatch(addQuestionNumber(questionNumber)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Questions)
