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

  render() {
    const { history, fetching } = this.props;
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
  fetching: propTypes.bool.isRequired,
  history: propTypes.shape({
    push: propTypes.func.isRequired,
  }).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Game);
