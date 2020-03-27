import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';

function situacaoRender(acertos) {
  return (
    (acertos < 3)
      ? <p className="title" data-testid="feedback-text">Podia ser melhor...</p>
      : <p className="title" data-testid="feedback-text">Mandou bem!</p>
  );
}

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.redirectRanking = this.redirectRanking.bind(this);
    this.redirectGame = this.redirectGame.bind(this);
  }

  redirectGame() {
    const { history } = this.props;
    history.push('/game-page');
  }

  redirectRanking() {
    const { history } = this.props;
    history.push('/game-ranking');
  }

  headerRender() {
    const { player: { score } } = this.props;
    const name = '';
    return (
      <div className="header">
        <p>
          Jogador:
          <span>
            {name}
          </span>
        </p>
        <div className="pontos">
          <p data-testid="header-score">
            Pontos:
            {score}
          </p>
          <i className="material-icons">
            fiber_manual_record
          </i>
        </div>
      </div>
    );
  }

  score() {
    const { player: { score, assertions } } = this.props;
    return (
      <div>
        <p>
          Você acertou
          <span data-testid="feedback-total-question">
            {assertions}
          </span>
          questões
        </p>
        <p>
          Um total de
          <span data-testid="feedback-total-score">
            {score}
          </span>
          pontos
        </p>
      </div>
    );
  }

  bodyRender() {
    const { player: { score } } = this.props;
    return (
      <div className="body">
        <div>
          {situacaoRender(score)}
        </div>
        {this.score()}
        <div>
          <button
            type="button"
            onClick={this.redirectRanking}
          >
            Ver Ranking
          </button>
          <button
            type="button"
            onClick={this.redirectGame}
          >
            Jogar Novamente
          </button>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="page_feedback">
        <div className="content">
          {this.headerRender()}
          {this.bodyRender()}
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  player: state.gravatarReducer.player,
  // score: state.questionReducer.score,
  // assertions: state.questionReducer.assertions,
  // gravatar: state.gravatarReducer.gravatar,
});

export default connect(mapStateToProps)(Feedback);
