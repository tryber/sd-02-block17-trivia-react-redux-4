import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './style.css';

const propriedade = {
  jogador: 'Eduardo',
  acertos: 2,
};

function situacaoRender(acertos) {
  return (
    (acertos < 3)
      ? <h3 className="title">Podia ser melhor...</h3>
      : <h3 className="title">Mandou bem !</h3>
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
    const { score } = this.props;
    const { jogador } = propriedade;
    return (
      <div className="header">
        <p>
          Jogador:
          <span>
            {jogador}
          </span>
        </p>
        <div className="pontos">
          <p>
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
    const { score, correct } = this.props;
    return (
      <div>
        <p>
          Você acertou
          <span>
            {correct}
          </span>
          questões
        </p>
        <p>
          Um total de
          <span>
            {score}
          </span>
          pontos
        </p>
      </div>
    );
  }

  bodyRender() {
    const { score } = this.props;
    return (
      <div className="body">
        {situacaoRender(score)}
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
  correct: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  score: state.questionReducer.score,
  correct: state.questionReducer.correct,
});

export default connect(mapStateToProps)(Feedback);
