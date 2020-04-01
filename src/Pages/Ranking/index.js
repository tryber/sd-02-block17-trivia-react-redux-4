import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';

// Deve-se mostrar uma lista com a imagem de perfil vinda do Gravatar,
// nome e pontuação das pessoas que jogaram em ordem decrescente
// (da maior pontuação para a menor);
// O ranking deve ser armazenado no navegador através do localStorage.

class Ranking extends Component {
  addPlayerLocalStorage() {
    const { player } = this.props;
    const { name, score, gravatarEmail: picture } = player;
    const newPlayer = { name, score, picture };
    console.log(newPlayer);
    const newRanking = JSON.parse(localStorage.getItem('ranking')) || [];
    newRanking.push(newPlayer);
    localStorage.setItem('ranking', JSON.stringify(newRanking));
  }

  montaPlayer() {
    this.addPlayerLocalStorage();
    const catchPlayer = JSON.parse(localStorage.getItem('ranking')) || [];
    return (
      <ul>
        {catchPlayer.map(({ name, score, picture }) => (
          <li>
            <img src={picture} alt="Gravatar" />
            {name}
            {' '}
            -
            {' '}
            {score}
            {' '}
            pontos
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h3 className="page-title">Ranking</h3>
        <div className="ranking-results">
          {this.montaPlayer()}
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
