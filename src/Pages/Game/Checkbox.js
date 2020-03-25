import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import data from './questionsMock';
import { addMarkedAnswer, addSelected } from '../../actions/checkbox';
import './Checkbox.css';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
  }

  handleChangeAnswer(target) {
    const { getAddMarkedAnswer, getSelected } = this.props;
    getAddMarkedAnswer(target.innerText);
    getSelected(true);
  }

  render() {
    const { questionNumber } = this.props;
    const { results } = data[questionNumber];
    const answers = [results[0].correct_answer, ...results[0].incorrect_answers];
    return (
      <div className="flex-container">
        {answers.map((answer) => (
          <button
            type="button"
            key={answer}
            className="answer-content"
            onClick={({ target }) => this.handleChangeAnswer(target)}
          >
            {answer}
          </button>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAddMarkedAnswer: (answer) => dispatch(addMarkedAnswer(answer)),
  getSelected: (selected) => dispatch(addSelected(selected)),
});

const mapStateToProps = ({
  checkboxReducer: {
    markedAnswer,
  },
}) => ({
  markedAnswer,
});

Checkbox.propTypes = {
  markedAnswer: propTypes.string,
  questionNumber: propTypes.number,
  getAddMarkedAnswer: propTypes.func,
}.isRequired;


export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
