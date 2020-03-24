import React, { Component } from 'react';
import data from './questionsMock';
import { connect } from 'react-redux';
import './Checkbox.css';
import { addMarkedAnswer } from '../../actions/checkbox';

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.referencia = React.createRef();
    this.handleChangeAnswer = this.handleChangeAnswer.bind(this);
  }

  handleChangeAnswer(target) {
    const { getAddMarkedAnswer } = this.props;
    const allButtons = this.referencia.current.querySelectorAll('button');
    allButtons.forEach((button) => {
      button.style.background = 'gray';
    });
    target.style.background = 'blue';
    getAddMarkedAnswer(target.innerText);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.questionNumber !== this.props.questionNumber) {
      const allButtons = this.referencia.current.querySelectorAll('button');
      allButtons.forEach((button) => {
        button.style.background = 'gray';
      });
    }
  }

  render() {
    const { questionNumber } = this.props;
    const { results } = data[questionNumber];
    const answers = [results[0].correct_answer, ...results[0].incorrect_answers];    
    return (
      <div className="flex-container" ref={this.referencia}>
        {answers.map((answer) => (
          <button
            type="button"
            key={answer}
            className={`answer-content ${answer}`}
            onClick={({ target }) => this.handleChangeAnswer(target)}
          >
            {answer}
          </button>
        ))}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAddMarkedAnswer: (answer) => dispatch(addMarkedAnswer(answer)),
})

const mapStateToProps = ({
  checkboxReducer: {
    markedAnswer,
  }
}) => ({
  markedAnswer,
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox)
