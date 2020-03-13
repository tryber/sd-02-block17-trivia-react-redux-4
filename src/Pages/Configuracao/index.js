import React, { Component } from 'react';

import './style.css';

import Dropdown from './Components/Dropdown';

export default class Configuracao extends Component {
  render() {
    return (
      <div className="page_config">
        <div className="content">
          <div className="campo">
            <p>Categoria:</p>
            <Dropdown />
          </div>
          <div className="campo">
            <p>Dificuldade:</p>
            <Dropdown />
          </div>
          <div className="campo">
            <p>Tipo:</p>
            <Dropdown />
          </div>
        </div>
      </div>
    );
  }
}
