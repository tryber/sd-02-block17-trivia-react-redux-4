import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addResetQuestionsReucer } from '../../actions/questions';
import './style.css';

function situacaoRender(assertions) {
  return (
    (assertions >= 3)
      ? <p className="title" data-testid="feedback-text">Mandou bem!</p>
      : <p className="title" data-testid="feedback-text">Podia ser melhor...</p>
  );
}

function scoreRender() {
  const ranking = localStorage.getItem('ranking');
  const { player: { score, assertions } } = JSON.parse(ranking);
  return (
    <div>
      <p data-testid="feedback-total-question">
        {`Você acertou ${assertions} questões`}
      </p>
      <p data-testid="feedback-total-score">
        {`Um total de ${score} pontos`}
      </p>
    </div>
  );
}

function headerRender() {
  const ranking = localStorage.getItem('ranking');
  const { player: { score, name } } = JSON.parse(ranking);
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
          {`Pontos: ${score}`}
        </p>
        <i className="material-icons">
          fiber_manual_record
        </i>
      </div>
    </div>
  );
}

export function addPlayerLocalStorage() {
  const player = localStorage.getItem('ranking');
  const { name, score, gravatarEmail: picture } = player;
  const newPlayer = { name, score, picture };
  const newRanking = JSON.parse(localStorage.getItem('ranking')) || [];
  newRanking.push(newPlayer);
  localStorage.setItem('ranking', JSON.stringify(newRanking));
}


class Feedback extends Component {
  constructor(props) {
    super(props);
    this.redirectRanking = this.redirectRanking.bind(this);
    this.redirectGame = this.redirectGame.bind(this);
  }

  componentDidMount() {
    addPlayerLocalStorage();
  }

  redirectGame() {
    const { history, getResetQuestions } = this.props;
    getResetQuestions();
    history.push('/game');
  }

  redirectRanking() {
    const { history } = this.props;
    history.push('/ranking');
  }

  bodyRender() {
    const ranking = localStorage.getItem('ranking');
    const { player: { assertions } } = JSON.parse(ranking);
    return (
      <div className="body">
        <div>
          {situacaoRender(assertions)}
        </div>
        {scoreRender()}
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
          {headerRender()}
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
  getResetQuestions: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  player: state.questionReducer.player,
});

const mapDispatchToProps = (dispatch) => ({
  getResetQuestions: () => dispatch(addResetQuestionsReucer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
