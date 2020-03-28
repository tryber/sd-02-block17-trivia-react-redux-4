import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Questions from './Questions';
import Header from './Header';
import './index.css';

import { thunkQuestions, thunkToken } from '../../actions';

class Game extends Component {
  componentDidMount() {
    const { importedQuestionThunk, importedTokenReducer } = this.props;
    importedTokenReducer()
      .then(({ token }) => importedQuestionThunk(token));
  }

  render() {
    const { history, loading } = this.props;
    if (loading) {
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
        <Questions history={history} />
      </div>
    );
  }
}

const mapStateToProps = ({
  apiReducer: {
    questions,
    loading,
  },
  gravatarReducer:
  { email },
  tokenReducer:
  { token },
}) => ({
  questions,
  loading,
  email,
  token,
});

const mapDispatchToProps = (dispatch) => ({
  importedTokenReducer: () => dispatch(thunkToken()),
  importedQuestionThunk: (token) => dispatch(thunkQuestions(token)),
});

Game.propTypes = {
  importedTokenReducer: propTypes.func.isRequired,
  importedQuestionThunk: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
