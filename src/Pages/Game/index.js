import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { thunkQuestions } from '../../Actions';

class Game extends Component {
  componentDidMount() {
    const { importedQuestionThunk } = this.props;
    importedQuestionThunk();
  }

  generateimage() {
    const { email } = this.props;
    const gravatarURL = 'https://www.gravatar.com/avatar/';
    return (
      <img src={`${gravatarURL}${email}`} alt="Gravatar" />
    );
  }

  render() {
    return (
      <div>
        <p>Game</p>
        {this.generateimage()}
      </div>
    );
  }
}

const mapStateToProps = ({
  apiReducer: {
    questions,
    fetching
  },
  gravatarReducer:
  { email }
}) =>
  ({ questions, fetching, email });

const mapDispatchToProps = (dispatch) => ({
  importedQuestionThunk: () => dispatch(thunkQuestions()),
});

Game.propTypes = {
  importedQuestionThunk: propTypes.func.isRequired,
  email: propTypes.string.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Game);
