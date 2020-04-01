import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TriviaLogo from '../../trivia.png';
import './index.css';

class Ranking extends Component {
  static renderGameLogo() {
    return (
      <div>
        <img src={TriviaLogo} className="trivia-logo" alt="Trivia Logo" />
      </div>
    );
  }

  static montaPlayer() {
    const gravatarImg = (picture, position) => (
      <img
        data-testid={`profile-picture-${position}`}
        className="gravatar-img"
        src={picture}
        alt="Player avatar at Gravatar"
      />
    );
    const catchPlayer = JSON.parse(localStorage.getItem('ranking')) || [];
    const sortedCatchPlayer = catchPlayer.sort((a, b) => {
      if (a.score > b.score) return -1;
      if (a.score < b.score) return 1;
      return 0;
    });

    return (
      <ul>
        {sortedCatchPlayer.map(({ name, score, picture }, index) => {
          const position = index + 1;
          return (
            <li>
              {gravatarImg(picture, position)}
              <span data-testid={`${name}-${position}`} className="nome-jogador">
                {name} - {score} pontos
              </span>
            </li>
          );
        })}
      </ul>
    );
  }

  static renderVoltarButton() {
    return (
      <div className="ending-div">
        <Link to="/feedback">
          <button type="button" className="botao-voltar">Voltar</button>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="ranking-results">
          {Ranking.renderGameLogo()}
          <h3 className="page-title">Ranking</h3>
          {Ranking.montaPlayer()}
          {Ranking.renderVoltarButton()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  player: state.questionReducer.player,
});

export default connect(mapStateToProps)(Ranking);

Ranking.propTypes = {
  player: propTypes.shape({
    name: propTypes.string.isRequired,
    score: propTypes.number.isRequired,
    gravatarEmail: propTypes.string.isRequired,
  }).isRequired,
};
