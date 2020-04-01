import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';

// Deve-se mostrar uma lista com a imagem de perfil vinda do Gravatar,
// nome e pontuação das pessoas que jogaram em ordem decrescente
// (da maior pontuação para a menor);
// O ranking deve ser armazenado no navegador através do localStorage.

class Ranking extends Component {
  static montaPlayer() {
    const gravatarImg = (picture, position) => (
      <img
        data-testid={`profile-picture-${position}`}
        className="gravatar-img"
        src={picture}
        alt="Player pictures"
      />
    );
    const catchPlayer = JSON.parse(localStorage.getItem('ranking')) || [];
    return (
      <ul>
        {catchPlayer.map(({ name, score, picture }, index) => {
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

  render() {
    return (
      <div>
        <h3 className="page-title">Ranking</h3>
        <div className="ranking-results">
          {Ranking.montaPlayer()}
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
