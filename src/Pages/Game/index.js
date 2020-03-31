import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Questions from './Questions';
import Header from './Header';
import './index.css';

class Game extends Component {
  render() {
    const { loading } = this.props;
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
        <Questions />
      </div>
    );
  }
}

const mapStateToProps = ({
  apiReducer: {
    loading,
  },
}) => ({
  loading,
});

Game.propTypes = {
  loading: propTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Game);
