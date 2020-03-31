import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import './index.css';

// Deve-se mostrar uma lista com a imagem de perfil vinda do Gravatar,
// nome e pontuação das pessoas que jogaram em ordem decrescente
// (da maior pontuação para a menor);
// O ranking deve ser armazenado no navegador através do localStorage.

class Ranking extends Component {
  // componentDidMount {
  //   const { player } = this.props;
  //   const { name, socre, gravatarEmail: picture } = player;
  //   const newPlayer = [{name, score, picture}]
  //   const newRanking = JSON.parse(localStorage.getItem('ranking')) || [];
  //   newRanking.push(newPlayer);
  //   localStorage.setItem('ranking', JSON.stringfy(newRanking));
  //   }

  montaPlayer() {
    const { name, score } = this.props.player;
    return (
      <ul>
        <li>
          {name}
          {' '}
          -
          {' '}
          {score}
          {' '}
          pontos
        </li>
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
