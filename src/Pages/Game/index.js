import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Questions from './Questions';
import './index.css';

export default class Game extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="game-content">
        <Header />
        <Questions history={history} />
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
