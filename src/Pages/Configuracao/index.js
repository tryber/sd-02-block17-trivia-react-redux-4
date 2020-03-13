import React, { Component } from 'react';

import './style.css';

import Dropdown from './Components/Dropdown';

const categoria = [
  'categoria1',
  'categoria2',
  'categoria3'
]
export default class Configuracao extends Component {
  render() {
    return (
      <div className="page_config">
        <div className="content">
          <div className="campo">
            <p>Categoria:</p>
            <Dropdown options={categoria} />
          </div>
          <div className="campo">
            <p>Dificuldade:</p>
            <Dropdown options={categoria} />
          </div>
          <div className="campo">
            <p>Tipo:</p>
            <Dropdown options={categoria} />
          </div>
        </div>
      </div>
    );
  }
}
