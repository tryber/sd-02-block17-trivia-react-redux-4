import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const propriedade = {
  jogador: 'Eduardo',
  acertos: 2,
};

function situacaoRender(acertos) {
  return (
    (acertos < 3) ?
      <h3 className="title">Podia ser melhor...</h3> :
      <h3 className="title">Mandou bem !</h3>
  );
}

function headerRender() {
  const { acertos, jogador } = propriedade;
  return (
    <div className="header">
      <p>Jogador: {jogador}</p>
      <div className="pontos">
        <p>Pontos: {acertos * 10}</p>
        <i className="material-icons">
          fiber_manual_record
        </i>
      </div>
    </div>
  );
}

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.redirectRanking = this.redirectRanking.bind(this);
    this.redirectGame = this.redirectGame.bind(this);
  }

  redirectGame() {
    this.props.history.push('/game-page');
  }

  redirectRanking() {
    this.props.history.push('/game-ranking');
  }

  bodyRender() {
    const { acertos } = propriedade;
    return (
      <div className="body">
        {situacaoRender(acertos)}
        <div>
          <p>Você acertou {acertos} questões</p>
          <p>Um total de {acertos * 10} pontos</p>
        </div>
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
};
