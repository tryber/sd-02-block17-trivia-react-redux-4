import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Questions from './Questions';
import Header from './Header';
import './index.css';
import { thunkQuestions } from '../../actions';

class Game extends Component {
  componentDidMount() {
    const { importedQuestionThunk, token } = this.props;
    importedQuestionThunk(token);
  }

  render() {
    const { history, token, fetching } = this.props;
    if (fetching) {
      return (
        <div className="game-content">
          <Header />
          <div>LOADING...</div>
        </div>
      );
    }
    return (
      <div className="game-content">
        <Header />
        <h1>{token}</h1>
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
  tokenReducer:
  { token },
}) =>
  ({ questions, fetching, email, token });

const mapDispatchToProps = (dispatch) => ({
  importedQuestionThunk: (token) => dispatch(thunkQuestions(token)),
});

Game.propTypes = {
  importedQuestionThunk: propTypes.func.isRequired,
  email: propTypes.string.isRequired,
  token: propTypes.string,
  fetching: propTypes.bool.isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

Game.defaultProps = {
  token: '',
};


export default connect(mapStateToProps, mapDispatchToProps)(Game);
