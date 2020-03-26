import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Questions from './Questions';
import Header from './Header';
import './index.css';
import { thunkQuestions } from '../../actions';

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
    const { history } = this.props;
    return (
      <div className="game-content">
        {this.generateimage()}
        <Header />
        <Questions history={history} />
      </div>
    );
  }
}

const mapStateToProps = ({
  apiReducer: {
    questions,
    fetching,
  },
  gravatarReducer:
  { email },
}) => ({ questions, fetching, email });

const mapDispatchToProps = (dispatch) => ({
  importedQuestionThunk: () => dispatch(thunkQuestions()),
});

Game.propTypes = {
  importedQuestionThunk: propTypes.func.isRequired,
  email: propTypes.string.isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Game);
