import React, { Component } from 'react';

import './style.css';

const propriedade = {
  jogador: 'Eduardo',
  acertos: 2,
};

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.redirectRanking = this.redirectRanking.bind(this);
    this.redirectGame = this.redirectGame.bind(this);
  }

  situacaoRender(acertos) {
    return(
      (acertos < 3) ?
      <h3>Podia ser melhor...</h3> :
      <h3>Mandou bem !</h3>
    );
  }

  redirectGame() {
    this.props.history.push('/game-page');
  }

  redirectRanking() {
    this.props.history.push('/game-ranking');
  }

  headerRender() {
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

  bodyRender() {
    const { acertos } = propriedade;
    return (
      <div className="body">
        {this.situacaoRender(acertos)}
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
          {this.headerRender()}
          {this.bodyRender()}
        </div>
      </div>
    );
  }
}
