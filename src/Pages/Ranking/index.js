import React, { Component } from 'react';
import './index.css';

// Deve-se mostrar uma lista com a imagem de perfil vinda do Gravatar,
// nome e pontuação das pessoas que jogaram em ordem decrescente
// (da maior pontuação para a menor);
// O ranking deve ser armazenado no navegador através do localStorage.

export default class Ranking extends Component {
  // getLocalRanking() {
  //   let getRanking = localStorage.getItem();
  // }

  render() {
    return (
      <div>
        <h3 className="page-title">Ranking</h3>
        <div className="ranking-results">
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    );
  }
}
