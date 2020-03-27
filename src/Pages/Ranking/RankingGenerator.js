import React, { Component } from 'react';

// Deve-se mostrar uma lista com a imagem de perfil vinda do Gravatar, nome e pontuação das pessoas que jogaram em ordem decrescente (da maior pontuação para a menor);
// O ranking deve ser armazenado no navegador através do localStorage.

class RankingGenerator extends Component {
  getLocalRanking() {
    let getRanking = localStorage.getItem();
  }

  render() {
    return (
      <div>TESTE</div>
    );
  }
}

export default RankingGenerator;
